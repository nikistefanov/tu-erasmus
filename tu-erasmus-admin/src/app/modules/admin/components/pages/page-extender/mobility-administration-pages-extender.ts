import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MOBILITY_ADMINISTRATION_PRACTICE_PAGE_API, MOBILITY_ADMINISTRATION_STUDY_PAGE_API } from "../../../../../shared/constants/constants";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IPage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN, PAGE_TITLE } from "./base-page-extender";

@Injectable()
export class MobilityAdministrationPagesExtender extends BasePageExtender {
    private api: string;
    private title: string;

    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        this.setApi(pageUrl);

        return !!this.api;
    }

    save(homeData: IPage): Observable<IPage> {
        return this.rootService.pagesService.update(homeData, this.api);
    }

    fetchData(): Observable<IPage> {
        return this.rootService.pagesService.get(this.api);
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: this.title
        }
    }

    private setApi(pageUrl: string) {
        switch(pageUrl) {
            case RoutePaths.MobilityAdministrationPracticePage:
                this.api = MOBILITY_ADMINISTRATION_PRACTICE_PAGE_API;
                this.title = `${PAGE_TITLE} Преподавателска мобилност с цел преподаване`;
                break;
            case RoutePaths.MobilityAdministrationStudyPage:
                this.api = MOBILITY_ADMINISTRATION_STUDY_PAGE_API;
                this.title = `${PAGE_TITLE} Преподавателски и непреподавателски състав с цел обучение`;
                break;
        }
    }
}

export const MOBILITY_ADMINISTRATION_PAGES_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: MobilityAdministrationPagesExtender
};

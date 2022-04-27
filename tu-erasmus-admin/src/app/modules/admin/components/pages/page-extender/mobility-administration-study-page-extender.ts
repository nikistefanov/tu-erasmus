import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IPage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN } from "./base-page-extender";

@Injectable()
export class MobilityAdministrationStudyPageExtender extends BasePageExtender {
    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        return pageUrl === RoutePaths.MobilityAdministrationStudyPage;
    }

    save(homeData: IPage): Observable<IPage> {
        return this.rootService.mobilityAdministrationStudyPage.update(homeData);
    }

    fetchData(): Observable<IPage> {
        return this.rootService.mobilityAdministrationStudyPage.get();
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: "Редактиране на съдържанието на страница: Преподавателски и непреподавателски състав с цел обучение"
        }
    }
}

export const MOBILITY_ADMINISTRATION_STUDY_PAGE_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: MobilityAdministrationStudyPageExtender
};

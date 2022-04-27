import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../../../../../shared/constants/constants";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IPage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN, PAGE_TITLE } from "./base-page-extender";

@Injectable()
export class MobilityStudentsPagesExtender extends BasePageExtender {
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
            case RoutePaths.MobilityStudentsStudyPage:
                this.api = API.MOBILITY_STUDENTS_STUDY_PAGE;
                this.title = `${PAGE_TITLE} Студентска мобилност с цел обучение`;
                break;
                case RoutePaths.MobilityStudentsPracticePage:
                    this.api = API.MOBILITY_STUDENTS_PRACTICE_PAGE;
                    this.title = `${PAGE_TITLE} Студентска мобилност с цел практика`;
                break;
        }
    }
}

export const MOBILITY_STUDENTS_PAGES_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: MobilityStudentsPagesExtender
};

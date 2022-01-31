import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IMobilityStudentsStudyPage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN } from "./base-page-extender";

@Injectable()
export class MobilityStudentsStudyPageExtender extends BasePageExtender {
    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        return pageUrl === RoutePaths.MobilityStudentsStudyPage;
    }

    save(homeData: IMobilityStudentsStudyPage): Observable<IMobilityStudentsStudyPage> {
        return this.rootService.mobilityStudentStudyPage.update(homeData);
    }

    fetchData(): Observable<IMobilityStudentsStudyPage> {
        return this.rootService.mobilityStudentStudyPage.get();
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: "Редактиране на съдържанието на страница: Студентска мобилност с цел обучение"
        }
    }
}

export const MOBILITY_STUDENTS_STUDY_PAGE_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: MobilityStudentsStudyPageExtender
};

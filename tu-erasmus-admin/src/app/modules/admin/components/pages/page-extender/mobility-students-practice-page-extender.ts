import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IMobilityStudentsPracticePage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN } from "./base-page-extender";

@Injectable()
export class MobilityStudentsPracticePageExtender extends BasePageExtender {
    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        return pageUrl === RoutePaths.MobilityStudentsPracticePage;
    }

    save(homeData: IMobilityStudentsPracticePage): Observable<IMobilityStudentsPracticePage> {
        return this.rootService.mobilityStudentPracticePage.update(homeData);
    }

    fetchData(): Observable<IMobilityStudentsPracticePage> {
        return this.rootService.mobilityStudentPracticePage.get();
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: "Редактиране на съдържанието на страница: Студентска мобилност с цел практика"
        }
    }
}

export const MOBILITY_STUDENTS_PRACTICE_PAGE_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: MobilityStudentsPracticePageExtender
};

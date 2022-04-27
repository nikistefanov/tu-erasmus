import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IMobilityStudentsPracticePage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN } from "./base-page-extender";

@Injectable()
export class MobilityAdministrationPracticePageExtender extends BasePageExtender {
    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        return pageUrl === RoutePaths.MobilityAdministrationPracticePage;
    }

    save(homeData: IMobilityStudentsPracticePage): Observable<IMobilityStudentsPracticePage> {
        return this.rootService.mobilityAdministrationPracticePage.update(homeData);
    }

    fetchData(): Observable<IMobilityStudentsPracticePage> {
        return this.rootService.mobilityAdministrationPracticePage.get();
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: "Редактиране на съдържанието на страница: Преподавателска мобилност с цел преподаване"
        }
    }
}

export const MOBILITY_ADMINISTRATION_PRACTICE_PAGE_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: MobilityAdministrationPracticePageExtender
};

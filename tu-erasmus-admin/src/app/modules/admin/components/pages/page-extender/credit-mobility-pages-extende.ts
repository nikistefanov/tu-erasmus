import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../../../../../shared/constants/constants";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IPage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN, PAGE_TITLE } from "./base-page-extender";

const COMMON_TITLE = "Кредитна мобилност - ";

@Injectable()
export class CreditMobilityPagesExtender extends BasePageExtender {
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
        this.title = `${PAGE_TITLE} ${COMMON_TITLE}`;
        switch(pageUrl) {
            case RoutePaths.CreditMobilityInfo:
                this.api = API.CREDIT_MOBILITY_INFO_PAGE;
                this.title += ` Обща информация`;
                break;
            case RoutePaths.CreditMobilityApplication:
                this.api = API.CREDIT_MOBILITY_APPLICATION_PAGE;
                this.title += ` Кандидатстване`;
                break;
            case RoutePaths.CreditMobilityPartners:
                this.api = API.CREDIT_MOBILITY_PARTNERS_PAGE;
                this.title += ` Партньори`;
                break;
            case RoutePaths.CreditMobilityStaffTraining:
                this.api = API.CREDIT_MOBILITY_STAFF_TRAINING_PAGE;
                this.title += ` Мобилност на персонала с цел обучение`;
                break;
            case RoutePaths.CreditMobilityStudentMobility:
                this.api = API.CREDIT_MOBILITY_STUDENT_MOBILITY_PAGE;
                this.title += ` Студентска мобилност`;
                break;
            case RoutePaths.CreditMobilityTeachingMobility:
                this.api = API.CREDIT_MOBILITY_STAFF_TEACHING_MOBILITY_PAGE;
                this.title += ` Преподавателска мобилност`;
                break;
        }
    }
}

export const CREDIT_MOBILITY_PAGES_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: CreditMobilityPagesExtender
};

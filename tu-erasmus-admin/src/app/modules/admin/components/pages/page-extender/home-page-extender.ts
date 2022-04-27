import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IHomePage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN } from "./base-page-extender";

@Injectable()
export class HomePageExtender extends BasePageExtender {
    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        return pageUrl === RoutePaths.HomePage;
    }

    save(homeData: IHomePage): Observable<IHomePage> {
        return this.rootService.homePageService.update(homeData);
    }

    fetchData(): Observable<IHomePage> {
        return this.rootService.homePageService.get();
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: "Редактиране на съдържанието на страница: Начало",
            toggleLabel: "Скрий карта с партньори"
        }
    }
}

export const HOME_PAGE_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: HomePageExtender
};

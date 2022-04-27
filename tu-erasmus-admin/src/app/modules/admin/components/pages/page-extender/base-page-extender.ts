import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { IPage } from "../../../../../shared/models/db-models";

export const PAGE_EXTENDER_TOKEN = new InjectionToken("page_extender_token");
export const PAGE_TITLE = "Редактиране на съдържанието на страница:";

export abstract class BasePageExtender {
    abstract canHandle(pageUrl: string): boolean;

    abstract save(homeData: IPage): Observable<IPage>;

    abstract fetchData(): Observable<IPage>;

    abstract getPageSettings(): IPageExtenderSettings;
}

import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ERASMUS_API } from "../../../../../shared/constants/constants";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IErasmusPage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN } from "./base-page-extender";

@Injectable()
export class ErasmusPageExtender extends BasePageExtender {
    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        return pageUrl === RoutePaths.ErasmusPage;
    }

    save(homeData: IErasmusPage): Observable<IErasmusPage> {
        return this.rootService.pagesService.update(homeData, ERASMUS_API);
    }

    fetchData(): Observable<IErasmusPage> {
        return this.rootService.pagesService.get(ERASMUS_API);
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: "Редактиране на съдържанието на страница: Еразъм+"
        }
    }
}

export const ERASMUS_PAGE_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: ErasmusPageExtender
};

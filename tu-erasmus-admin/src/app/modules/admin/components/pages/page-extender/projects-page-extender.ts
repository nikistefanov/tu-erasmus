import { ClassProvider, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API } from "../../../../../shared/constants/constants";
import { IPageExtenderSettings } from "../../../../../shared/constants/page-extender";
import { RoutePaths } from "../../../../../shared/constants/route-paths";
import { IProjectsPage } from "../../../../../shared/models/db-models";
import { RootService } from "../../../../http/root.service";
import { BasePageExtender, PAGE_EXTENDER_TOKEN } from "./base-page-extender";

@Injectable()
export class ProjectsPageExtender extends BasePageExtender {
    constructor(private rootService: RootService) {
        super();
    }
    canHandle(pageUrl: string): boolean {
        return pageUrl === RoutePaths.ProjectsPage;
    }

    save(homeData: IProjectsPage): Observable<IProjectsPage> {
        return this.rootService.pagesService.update(homeData, API.PROJECTS_PAGE);
    }

    fetchData(): Observable<IProjectsPage> {
        return this.rootService.pagesService.get(API.PROJECTS_PAGE);
    }

    getPageSettings(): IPageExtenderSettings {
        return {
            heading: "Редактиране на съдържанието на страница: Проекти"
        }
    }
}

export const PROJECTS_PAGE_EXTENDER: ClassProvider = {
    multi: true,
    provide: PAGE_EXTENDER_TOKEN,
    useClass: ProjectsPageExtender
};

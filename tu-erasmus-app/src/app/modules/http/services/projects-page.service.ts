import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { PROJECTS_PAGE_API } from '../../../shared/constants/constants';
import { IProjectsPage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectsPageService extends ApiService {

    get(): Observable<IProjectsPage> {
        return this.getInternal<IProjectsPage>(PROJECTS_PAGE_API);
    }
}

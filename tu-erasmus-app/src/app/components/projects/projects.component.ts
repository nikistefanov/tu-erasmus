import { Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../modules/http/root.service';
import { LOADING_TIME } from '../../shared/constants/constants';
import { IPage, IProjectsPage, PROJECTS_PAGE_API } from '../../shared/models/db-models';


@Component({
    selector: 'tu-projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
    loading: boolean = true;
    pageData: IProjectsPage;

    constructor(private rootService: RootService) {
    }

    ngOnInit(): void {
        this.rootService.pageService.get<IPage>(PROJECTS_PAGE_API).pipe(
            first(),
            delay(LOADING_TIME)
        ).subscribe({
            next: data => {
                this.pageData = data;
                this.loading = false;
            }
        })
    }
}


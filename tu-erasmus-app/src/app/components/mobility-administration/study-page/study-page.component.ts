import { Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../../modules/http/root.service';
import { LOADING_TIME } from '../../../shared/constants/constants';
import { IPage, MOBILITY_ADMINISTRATION_STUDY_PAGE_API } from '../../../shared/models/db-models';


@Component({
    selector: 'tu-mobility-administration-study-page',
    templateUrl: './study-page.component.html'
})
export class MobilityAdministrationStudyPageComponent implements OnInit {
    loading: boolean = true;
    pageData: IPage;

    constructor(private rootService: RootService) {
    }

    ngOnInit(): void {
        this.rootService.pageService.get<IPage>(MOBILITY_ADMINISTRATION_STUDY_PAGE_API).pipe(
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


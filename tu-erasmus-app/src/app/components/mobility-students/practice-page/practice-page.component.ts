import { Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../../modules/http/root.service';
import { LOADING_TIME } from '../../../shared/constants/constants';
import { IMobilityStudentsPracticePage, IPage, MOBILITY_STUDENTS_PRACTICE_PAGE_API } from '../../../shared/models/db-models';


@Component({
    selector: 'tu-mobility-students-practice-page',
    templateUrl: './practice-page.component.html'
})
export class MobilityStudentsPracticePageComponent implements OnInit {
    loading: boolean = true;
    pageData: IMobilityStudentsPracticePage;

    constructor(private rootService: RootService) {
    }

    ngOnInit(): void {
        this.rootService.pageService.get<IPage>(MOBILITY_STUDENTS_PRACTICE_PAGE_API).pipe(
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


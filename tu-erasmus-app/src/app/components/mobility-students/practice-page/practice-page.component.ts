import { Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../../modules/http/root.service';
import { LOADING_TIME } from '../../../shared/constants/constants';
import { IMobilityStudentsPracticePage } from '../../../shared/models/db-models';


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
        this.rootService.mobilityStudentPracticePage.get().pipe(
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


import { Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../modules/http/root.service';
import { LOADING_TIME } from '../../shared/constants/constants';
import { ERASMUS_API, IErasmusPage, IPage } from '../../shared/models/db-models';

@Component({
    selector: 'tu-erasmus',
    templateUrl: './erasmus.component.html'
})
export class ErasmusComponent implements OnInit {
    loading: boolean = true;
    pageData: IErasmusPage;

    constructor(private rootService: RootService) {
    }

    ngOnInit(): void {
        this.rootService.pageService.get<IPage>(ERASMUS_API).pipe(
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


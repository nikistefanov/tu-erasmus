import { Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../../modules/http/root.service';
import { LOADING_TIME } from '../../../shared/constants/constants';
import { IPage } from '../../../shared/models/db-models';


@Component({
    selector: 'tu-credit-mobility-info-page',
    templateUrl: './info-page.component.html'
})
export class CreditMobilityInfoPageComponent implements OnInit {
    loading: boolean = true;
    pageData: IPage;

    constructor(private rootService: RootService) {
    }

    ngOnInit(): void {
        this.rootService.creditMobilityPages.getInfoPage().pipe(
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


import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { delay, first } from 'rxjs';
import { RootService } from '../../modules/http/root.service';
import { LOADING_TIME } from '../../shared/constants/constants';
import { COUNTRIES, ICountry, IErasmusPage, IUniversity } from '../../shared/models/db-models';

declare var svgMap: any;

@Component({
    selector: 'tu-erasmus',
    templateUrl: './erasmus.component.html',
    styleUrls: ['./erasmus.component.scss']
})
export class ErasmusComponent implements OnInit {
    loading: boolean = true;
    pageData: IErasmusPage;

    constructor(private rootService: RootService, private detector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.rootService.erasmusPage.get().pipe(
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


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, first } from 'rxjs';
import { RootService } from '../../../modules/http/root.service';
import { LOADING_TIME } from '../../../shared/constants/constants';
import { IUniversity } from '../../../shared/models/db-models';

@Component({
    selector: 'tu-partners-details',
    templateUrl: './partners-details.component.html'
})
export class PartnersDetailsComponent {
    university: IUniversity;
    loading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private rootService: RootService,
    ) { }

    async ngOnInit() {
        this.route.params.pipe(
            first()
        ).subscribe({
            next: params => {
                this.rootService.universities.get(params["id"]).pipe(
                    first(),
                    delay(LOADING_TIME)
                ).subscribe({
                    next: data => {
                        this.university = data;
                        this.loading = false;
                    },
                    error: error => {
                        this.loading = false;
                    }
                })
            }
        });
    }
}


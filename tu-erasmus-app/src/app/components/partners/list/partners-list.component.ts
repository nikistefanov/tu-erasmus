import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, first } from 'rxjs';
import { RootService } from '../../../modules/http/root.service';
import { LOADING_TIME } from '../../../shared/constants/constants';
import { IUniversity } from '../../../shared/models/db-models';

@Component({
    selector: 'tu-partners-list',
    templateUrl: './partners-list.component.html'
})
export class PartnersListComponent implements OnInit {
    headers = [
        "Име",
        "Държава"
    ]

    columns = [
        "name",
        "countryName"
    ];
    loading: boolean = true;
    universities: IUniversity[] = [];

    constructor(private rootService: RootService, private router: Router) {}

    ngOnInit(): void {
        this.rootService.universities.getAll().pipe(
            first(),
            delay(LOADING_TIME)
        ).subscribe({
            next: data => {
                this.universities = data;
                this.loading = false;
            }
        });
    }

    handleClick(uni: IUniversity) {
        this.router.navigateByUrl(`partners/${uni.id}`);
    }
}


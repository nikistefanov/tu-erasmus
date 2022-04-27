import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, first } from 'rxjs';
import { RootService } from '../../modules/http/root.service';
import { LOADING_TIME } from '../../shared/constants/constants';
import { IPage } from '../../shared/models/db-models';


@Component({
    selector: 'tu-base-page',
    templateUrl: './base-page.component.html'
})
export class BasePageComponent implements OnInit {
    loading: boolean = true;
    pageData: IPage;

    private api: string;

    constructor(private rootService: RootService, private route: ActivatedRoute) {
        this.api = this.route.snapshot.data["api"];
    }

    ngOnInit(): void {
        if (!this.api) {
            return;
        }

        this.rootService.pageService.get<IPage>(this.api).pipe(
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


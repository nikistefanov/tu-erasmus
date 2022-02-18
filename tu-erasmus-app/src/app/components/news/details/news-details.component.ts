import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, first } from 'rxjs';
import { RootService } from '../../../modules/http/root.service';
import { LOADING_TIME } from '../../../shared/constants/constants';
import { INewsItem } from '../../../shared/models/db-models';

@Component({
    selector: 'tu-news-details',
    templateUrl: './news-details.component.html'
})
export class NewsDetailsComponent {
    news: INewsItem;
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
                this.rootService.newsItems.get(params["id"]).pipe(
                    first(),
                    delay(LOADING_TIME)
                ).subscribe({
                    next: data => {
                        this.news = data;
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


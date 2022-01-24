import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, first } from 'rxjs';
import { RootService } from '../../modules/http/root.service';
import { LOADING_TIME } from '../../shared/constants/constants';
import { INewsItem } from '../../shared/models/db-models';

@Component({
    selector: 'tu-news-lists',
    templateUrl: './news-lists.component.html'
})
export class NewsListComponent implements OnInit {
    headers = [
        "Заглавие",
        "Създадена на"
    ]

    columns = [
        "name",
        "created_at"
    ];
    newsItems: INewsItem[] = [];
    loading: boolean = true;

    constructor(private rootService: RootService, private router: Router) {}

    ngOnInit(): void {
        this.rootService.newsItems.getAllActive().pipe(
            first(),
            delay(LOADING_TIME)
        ).subscribe({
            next: data => {
                this.newsItems = data;
                this.loading = false;
            }
        })
    }

    handleClick(newsItem: INewsItem) {
        this.router.navigateByUrl(`news-items/${newsItem.id}`);
    }
}


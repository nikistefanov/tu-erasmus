import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { INewsItem, NEWS_ITEMS_API } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class NewsItemsService extends ApiService {

    getAll(): Observable<INewsItem[]> {
        return this.getInternal<INewsItem[]>(NEWS_ITEMS_API);
    }

    get(newsItemId: string): Observable<INewsItem> {
        return this.getInternal<INewsItem>(`${NEWS_ITEMS_API}/${newsItemId}`);
    }

    getAllActive(): Observable<INewsItem[]> {
        return this.getInternal<INewsItem[]>(NEWS_ITEMS_API, { "hide": "false"});
    }
}

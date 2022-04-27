import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { INewsItem, API } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class NewsItemsService extends ApiService {

    getAll(): Observable<INewsItem[]> {
        return this.getInternal<INewsItem[]>(API.NEWS_ITEMS);
    }

    get(newsItemId: string): Observable<INewsItem> {
        return this.getInternal<INewsItem>(`${API.NEWS_ITEMS}/${newsItemId}`);
    }

    getAllActive(): Observable<INewsItem[]> {
        return this.getInternal<INewsItem[]>(API.NEWS_ITEMS, { "hide": "false"});
    }
}

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API } from '../../../shared/constants/constants';
import { INewsItem } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class NewsItemsService extends ApiService {

    getAll(): Observable<INewsItem[]> {
        return this.getInternal<INewsItem[]>(API.NEWS_ITEMS);
    }

    create(newsItem: INewsItem): Observable<INewsItem> {
        return this.postInternal<INewsItem>(API.NEWS_ITEMS, this.getBodyObject(newsItem));
    }

    delete(newsItemId: number | undefined) {
        return this.deleteInternal<INewsItem>(`${API.NEWS_ITEMS}/${newsItemId}`);
    }

    update(newsItem: INewsItem, updatenewsItemId: number): Observable<INewsItem> {
        return this.putInternal<INewsItem>(`${API.NEWS_ITEMS}/${updatenewsItemId}`, this.getBodyObject(newsItem));
    }

    private getBodyObject(newsItem: INewsItem) {
        return {
            name: newsItem.name,
            body: newsItem.body,
            hide: newsItem.hide
        }
    }
}

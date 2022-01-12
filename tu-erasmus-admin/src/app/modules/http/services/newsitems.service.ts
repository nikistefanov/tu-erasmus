import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { NEWS_ITEMS_API } from '../../../shared/constants/constants';
import { INewsItem } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class NewsItemsService extends ApiService {

    getAll(): Observable<INewsItem[]> {
        return this.getInternal<INewsItem[]>(NEWS_ITEMS_API);
    }

    create(newsItem: INewsItem): Observable<INewsItem> {
        return this.postInternal<INewsItem>(NEWS_ITEMS_API, this.getBodyObject(newsItem));
    }

    delete(newsItemId: number | undefined) {
        return this.deleteInternal<INewsItem>(`${NEWS_ITEMS_API}/${newsItemId}`);
    }

    update(newsItem: INewsItem, updatenewsItemId: number): Observable<INewsItem> {
        return this.putInternal<INewsItem>(`${NEWS_ITEMS_API}/${updatenewsItemId}`, this.getBodyObject(newsItem));
    }

    private getBodyObject(newsItem: INewsItem) {
        return {
            title: newsItem.title,
            body: newsItem.body,
            hide: newsItem.hide
        }
    }
}

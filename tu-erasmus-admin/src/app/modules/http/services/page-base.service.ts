import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IPage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class PageBaseService extends ApiService {

    get<T>(pageAPI: string): Observable<T> {
        return this.getInternal<T>(pageAPI);
    }

    update<T>(page: IPage, pageAPI: string): Observable<T> {
        return this.putInternal<T>(`${pageAPI}`, {
            heading: page.heading,
            body: page.body
        });
    }
}

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IPage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class PageBaseService extends ApiService {

    get<T>(api: string): Observable<T> {
        return this.getInternal<T>(api);
    }

    update<T>(page: IPage, api: string): Observable<T> {
        return this.putInternal<T>(`${api}`, {
            heading: page.heading,
            body: page.body
        });
    }
}

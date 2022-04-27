import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class PageService extends ApiService {

    get<T>(api: string): Observable<T> {
        return this.getInternal<T>(api);
    }
}

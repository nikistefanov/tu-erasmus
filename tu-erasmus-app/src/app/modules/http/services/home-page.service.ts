import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ADMIN_HOME_API } from '../../../shared/constants/constants';
import { IHomePage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class HomePageService extends ApiService {

    get(): Observable<IHomePage> {
        return this.getInternal<IHomePage>(ADMIN_HOME_API);
    }
}

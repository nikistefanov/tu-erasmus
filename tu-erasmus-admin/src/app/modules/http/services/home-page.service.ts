import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API } from '../../../shared/constants/constants';
import { IHomePage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class HomePageService extends ApiService {

    get(): Observable<IHomePage> {
        return this.getInternal<IHomePage>(API.ADMIN_HOME);
    }

    update(adminHome: IHomePage): Observable<IHomePage> {
        return this.putInternal<IHomePage>(`${API.ADMIN_HOME}`, {
            heading: adminHome.heading,
            body: adminHome.body,
            hideMap: adminHome.toggle
        });
    }
}

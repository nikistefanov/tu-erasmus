import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ERASMUS_API } from '../../../shared/constants/constants';
import { IErasmusPage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class ErasmusPageService extends ApiService {

    get(): Observable<IErasmusPage> {
        return this.getInternal<IErasmusPage>(ERASMUS_API);
    }

    update(adminHome: IErasmusPage): Observable<IErasmusPage> {
        return this.putInternal<IErasmusPage>(`${ERASMUS_API}`, {
            heading: adminHome.heading,
            body: adminHome.body
        });
    }
}

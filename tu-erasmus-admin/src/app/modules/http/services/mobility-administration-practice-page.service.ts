import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { MOBILITY_ADMINISTRATION_PRACTICE_PAGE_API } from '../../../shared/constants/constants';
import { IPage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class MobilityAdministrationPracticePageService extends ApiService {

    get(): Observable<IPage> {
        return this.getInternal<IPage>(MOBILITY_ADMINISTRATION_PRACTICE_PAGE_API);
    }

    update(page: IPage): Observable<IPage> {
        return this.putInternal<IPage>(`${MOBILITY_ADMINISTRATION_PRACTICE_PAGE_API}`, {
            heading: page.heading,
            body: page.body
        });
    }
}

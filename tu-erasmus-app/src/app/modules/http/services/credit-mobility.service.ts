import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CREDIT_MOBILITY_INFO_PAGE_API } from '../../../shared/constants/constants';
import { IPage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class CreditMobilityPagesService extends ApiService {

    getInfoPage(): Observable<IPage> {
        return this.getInternal<IPage>(CREDIT_MOBILITY_INFO_PAGE_API);
    }
}

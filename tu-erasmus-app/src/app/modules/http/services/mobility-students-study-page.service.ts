import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { MOBILITY_STUDENTS_STUDY_PAGE_API } from '../../../shared/constants/constants';
import { IMobilityStudentsStudyPage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class MobilityStudentsStudyPageService extends ApiService {

    get(): Observable<IMobilityStudentsStudyPage> {
        return this.getInternal<IMobilityStudentsStudyPage>(MOBILITY_STUDENTS_STUDY_PAGE_API);
    }
}

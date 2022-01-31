import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { MOBILITY_STUDENTS_PRACTICE_PAGE_API } from '../../../shared/constants/constants';
import { IMobilityStudentsPracticePage } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class MobilityStudentsPracticePageService extends ApiService {

    get(): Observable<IMobilityStudentsPracticePage> {
        return this.getInternal<IMobilityStudentsPracticePage>(MOBILITY_STUDENTS_PRACTICE_PAGE_API);
    }
}

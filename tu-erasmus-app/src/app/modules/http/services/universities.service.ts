import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IUniversity } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

export const UNIVERSITIES_API =  "/universities";

@Injectable({
    providedIn: 'root'
})
export class UniversitiesService extends ApiService {

    getAll(): Observable<IUniversity[]> {
        return this.getInternal<IUniversity[]>(UNIVERSITIES_API);
    }
}

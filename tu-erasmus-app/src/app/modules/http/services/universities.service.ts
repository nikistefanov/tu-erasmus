import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IUniversity, UNIVERSITIES_API } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class UniversitiesService extends ApiService {

    getAll(): Observable<IUniversity[]> {
        return this.getInternal<IUniversity[]>(UNIVERSITIES_API);
    }

    get(universityId: string): Observable<IUniversity> {
        return this.getInternal<IUniversity>(`${UNIVERSITIES_API}/${universityId}`);
    }

    getByCountry(countryName: string): Observable<IUniversity[]> {
        return this.getInternal<IUniversity[]>(UNIVERSITIES_API, { "countryName": `${countryName}`});
    }
}

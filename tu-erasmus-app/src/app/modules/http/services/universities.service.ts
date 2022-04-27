import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IUniversity, API } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class UniversitiesService extends ApiService {

    getAll(): Observable<IUniversity[]> {
        return this.getInternal<IUniversity[]>(API.UNIVERSITIES);
    }

    get(universityId: string): Observable<IUniversity> {
        return this.getInternal<IUniversity>(`${API.UNIVERSITIES}/${universityId}`);
    }

    getByCountry(countryName: string): Observable<IUniversity[]> {
        return this.getInternal<IUniversity[]>(API.UNIVERSITIES, { "countryName": `${countryName}`});
    }
}

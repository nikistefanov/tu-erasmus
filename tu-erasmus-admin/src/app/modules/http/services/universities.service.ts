import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { UNIVERSITIES_API } from '../../../shared/constants/constants';
import { IUniversity } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class UniversitiesService extends ApiService {

    getAll(): Observable<IUniversity[]> {
        return this.getInternal<IUniversity[]>(UNIVERSITIES_API);
    }

    create(university: IUniversity): Observable<IUniversity> {
        return this.postInternal<IUniversity>(UNIVERSITIES_API, {
            name: university.name,
            description: university.description,
            countryName: university.countryName
        });
    }

    delete(universityId: number | undefined) {
        return this.deleteInternal<IUniversity>(`${UNIVERSITIES_API}/${universityId}`);
    }

    update(university: IUniversity, updateUniversityId: number): Observable<IUniversity> {
        return this.putInternal<IUniversity>(`${UNIVERSITIES_API}/${updateUniversityId}`, {
            name: university.name,
            description: university.description,
            countryName: university.countryName
        });
    }
}

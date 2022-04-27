import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API } from '../../../shared/constants/constants';
import { IUniversity } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class UniversitiesService extends ApiService {

    getAll(): Observable<IUniversity[]> {
        return this.getInternal<IUniversity[]>(API.UNIVERSITIES);
    }

    create(university: IUniversity): Observable<IUniversity> {
        return this.postInternal<IUniversity>(API.UNIVERSITIES, this.getBodyObject(university));
    }

    delete(universityId: number | undefined) {
        return this.deleteInternal<IUniversity>(`${API.UNIVERSITIES}/${universityId}`);
    }

    update(university: IUniversity, updateUniversityId: number): Observable<IUniversity> {
        return this.putInternal<IUniversity>(`${API.UNIVERSITIES}/${updateUniversityId}`, this.getBodyObject(university));
    }

    private getBodyObject(university: IUniversity) {
        return {
            name: university.name,
            countryName: university.countryName,
            description: university.description,
            website: university.website
        }
    }
}

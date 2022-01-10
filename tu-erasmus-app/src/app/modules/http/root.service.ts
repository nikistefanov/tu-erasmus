import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UniversitiesService } from './services/universities.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    universities: UniversitiesService;

    constructor(http: HttpClient) {
        super(http);

        this.universities = new UniversitiesService(http);
    }
}

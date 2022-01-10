import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from './api.service';
import { UniversitiesService } from './services/universities.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    universities: UniversitiesService;

    constructor(http: HttpClient, auth: AuthService) {
        super(http, auth);

        this.universities = new UniversitiesService(http, auth);
    }
}

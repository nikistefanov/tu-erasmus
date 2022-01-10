import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HomePageService } from './services/home-page.service';
import { UniversitiesService } from './services/universities.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    universities: UniversitiesService;
    homePage: HomePageService;

    constructor(http: HttpClient) {
        super(http);

        this.universities = new UniversitiesService(http);
        this.homePage = new HomePageService(http);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from './api.service';
import { HomePageService } from './services/home-page.service';
import { NewsItemsService } from './services/newsitems.service';
import { UniversitiesService } from './services/universities.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    universities: UniversitiesService;
    newsItems: NewsItemsService;
    homePage: HomePageService;

    constructor(http: HttpClient, auth: AuthService) {
        super(http, auth);

        this.universities = new UniversitiesService(http, auth);
        this.newsItems = new NewsItemsService(http, auth);
        this.homePage = new HomePageService(http, auth);
    }
}

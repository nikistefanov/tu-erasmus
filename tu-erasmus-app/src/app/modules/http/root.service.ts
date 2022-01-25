import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ErasmusPageService } from './services/erasmus-page.service';
import { HomePageService } from './services/home-page.service';
import { NewsItemsService } from './services/news-items.service';
import { ProjectsPageService } from './services/projects-page.service';
import { UniversitiesService } from './services/universities.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    universities: UniversitiesService;
    newsItems: NewsItemsService;
    homePage: HomePageService;
    erasmusPage: ErasmusPageService;
    projectsPage: ProjectsPageService;

    constructor(http: HttpClient) {
        super(http);

        this.universities = new UniversitiesService(http);
        this.newsItems = new NewsItemsService(http);
        this.homePage = new HomePageService(http);
        this.erasmusPage = new ErasmusPageService(http);
        this.projectsPage = new ProjectsPageService(http);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from './api.service';
import { DocumentsService } from './services/documents.service';
import { HomePageService } from './services/home-page.service';
import { NewsItemsService } from './services/newsitems.service';
import { PageBaseService } from './services/page-base.service';
import { UniversitiesService } from './services/universities.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    universities: UniversitiesService;
    newsItems: NewsItemsService;
    documents: DocumentsService;
    pagesService: PageBaseService;
    homePageService: HomePageService;

    constructor(http: HttpClient, auth: AuthService) {
        super(http, auth);

        this.universities = new UniversitiesService(http, auth);
        this.newsItems = new NewsItemsService(http, auth);
        this.documents = new DocumentsService(http, auth);
        this.pagesService = new PageBaseService(http, auth);
        this.homePageService = new HomePageService(http, auth);
    }
}

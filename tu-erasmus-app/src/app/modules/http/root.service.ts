import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { NewsItemsService } from './services/news-items.service';
import { PageService } from './services/page.service';
import { UniversitiesService } from './services/universities.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    universities: UniversitiesService;
    newsItems: NewsItemsService;
    pageService: PageService;

    constructor(http: HttpClient) {
        super(http);

        this.universities = new UniversitiesService(http);
        this.newsItems = new NewsItemsService(http);
        this.pageService = new PageService(http);
    }
}

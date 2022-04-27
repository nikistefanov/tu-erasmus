import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CreditMobilityPagesService } from './services/credit-mobility.service';
import { ErasmusPageService } from './services/erasmus-page.service';
import { HomePageService } from './services/home-page.service';
import { MobilityAdministrationPracticePageService } from './services/mobility-administration-practice-page.service';
import { MobilityAdministrationStudyPageService } from './services/mobility-administration-study-page.service';
import { MobilityStudentsPracticePageService } from './services/mobility-students-practice-page.service';
import { MobilityStudentsStudyPageService } from './services/mobility-students-study-page.service';
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
    mobilityStudentStudyPage: MobilityStudentsStudyPageService;
    mobilityStudentPracticePage: MobilityStudentsPracticePageService;
    mobilityAdministrationStudyPage: MobilityAdministrationStudyPageService;
    mobilityAdministrationPracticePage: MobilityAdministrationPracticePageService;
    creditMobilityPages: CreditMobilityPagesService;

    constructor(http: HttpClient) {
        super(http);

        this.universities = new UniversitiesService(http);
        this.newsItems = new NewsItemsService(http);
        this.homePage = new HomePageService(http);
        this.erasmusPage = new ErasmusPageService(http);
        this.projectsPage = new ProjectsPageService(http);
        this.mobilityStudentStudyPage = new MobilityStudentsStudyPageService(http);
        this.mobilityStudentPracticePage = new MobilityStudentsPracticePageService(http);
        this.mobilityAdministrationStudyPage = new MobilityAdministrationStudyPageService(http);
        this.mobilityAdministrationPracticePage = new MobilityAdministrationPracticePageService(http);
        this.creditMobilityPages = new CreditMobilityPagesService(http);
    }
}

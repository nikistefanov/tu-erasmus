import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from './api.service';
import { DocumentsService } from './services/documents.service';
import { ErasmusPageService } from './services/erasmus-page.service';
import { HomePageService } from './services/home-page.service';
import { MobilityAdministrationPracticePageService } from './services/mobility-administration-practice-page.service';
import { MobilityAdministrationStudyPageService } from './services/mobility-administration-study-page.service';
import { MobilityStudentsPracticePageService } from './services/mobility-students-practice-page.service';
import { MobilityStudentsStudyPageService } from './services/mobility-students-study-page.service';
import { NewsItemsService } from './services/newsitems.service';
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
    documents: DocumentsService;
    mobilityStudentStudyPage: MobilityStudentsStudyPageService;
    mobilityStudentPracticePage: MobilityStudentsPracticePageService;
    mobilityAdministrationPracticePage: MobilityAdministrationPracticePageService;
    mobilityAdministrationStudyPage: MobilityAdministrationStudyPageService;

    constructor(http: HttpClient, auth: AuthService) {
        super(http, auth);

        this.universities = new UniversitiesService(http, auth);
        this.newsItems = new NewsItemsService(http, auth);
        this.homePage = new HomePageService(http, auth);
        this.erasmusPage = new ErasmusPageService(http, auth);
        this.projectsPage = new ProjectsPageService(http, auth);
        this.documents = new DocumentsService(http, auth);
        this.mobilityStudentStudyPage = new MobilityStudentsStudyPageService(http, auth);
        this.mobilityStudentPracticePage = new MobilityStudentsPracticePageService(http, auth);
        this.mobilityAdministrationPracticePage = new MobilityAdministrationPracticePageService(http, auth);
        this.mobilityAdministrationStudyPage = new MobilityAdministrationStudyPageService(http, auth);
    }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './components/base-page/base-page.component';
import { HomeComponent } from './components/home/home.component';
import { NewsDetailsComponent } from './components/news/details/news-details.component';
import { NewsListComponent } from './components/news/list/news-lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartnersDetailsComponent } from './components/partners/details/partners-details.component';
import { PartnersListComponent } from './components/partners/list/partners-list.component';
import { RoutePaths } from './shared/constants/route-paths';
import { API } from './shared/models/db-models';

export const appRoutes: Routes = [
    { path: "", redirectTo: RoutePaths.Home, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "erasmus", component: BasePageComponent, data: { api: API.ERASMUS } },
    { path: "projects", component: BasePageComponent, data: { api: API.PROJECTS_PAGE } },
    { path: "partners", component: PartnersListComponent },
    { path: "partners/:id", component: PartnersDetailsComponent },
    { path: "news-items", component: NewsListComponent },
    { path: "news-items/:id", component: NewsDetailsComponent },
    { path: "mobility-students/study-page", component: BasePageComponent, data: { api: API.MOBILITY_STUDENTS_STUDY_PAGE } },
    { path: "mobility-students/practice-page", component: BasePageComponent, data: { api: API.MOBILITY_STUDENTS_PRACTICE_PAGE } },
    { path: "mobility-administration/study-page", component: BasePageComponent, data: { api: API.MOBILITY_ADMINISTRATION_STUDY_PAGE } },
    { path: "mobility-administration/practice-page", component: BasePageComponent, data: { api: API.MOBILITY_ADMINISTRATION_PRACTICE_PAGE } },
    { path: "credit-mobility/info-page", component: BasePageComponent, data: { api: API.CREDIT_MOBILITY_INFO_PAGE } },
    { path: "credit-mobility/application-page", component: BasePageComponent, data: { api: API.CREDIT_MOBILITY_APPLICATION_PAGE } },
    { path: "credit-mobility/partners-page", component: BasePageComponent, data: { api: API.CREDIT_MOBILITY_PARTNERS_PAGE } },
    { path: "credit-mobility/staff-training-page", component: BasePageComponent, data: { api: API.CREDIT_MOBILITY_STAFF_TRAINING_PAGE } },
    { path: "credit-mobility/student-mobility-page", component: BasePageComponent, data: { api: API.CREDIT_MOBILITY_STUDENT_MOBILITY_PAGE } },
    { path: "credit-mobility/staff-teaching-page", component: BasePageComponent, data: { api: API.CREDIT_MOBILITY_STAFF_TEACHING_MOBILITY_PAGE } },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

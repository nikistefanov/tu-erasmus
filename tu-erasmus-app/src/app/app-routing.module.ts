import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErasmusComponent } from './components/erasmus/erasmus.component';
import { HomeComponent } from './components/home/home.component';
import { MobilityAdministrationPracticePageComponent } from './components/mobility-administration/practice-page/practice-page.component';
import { MobilityAdministrationStudyPageComponent } from './components/mobility-administration/study-page/study-page.component';
import { MobilityStudentsPracticePageComponent } from './components/mobility-students/practice-page/practice-page.component';
import { MobilityStudentsStudyPageComponent } from './components/mobility-students/study-page/study-page.component';
import { NewsDetailsComponent } from './components/news/details/news-details.component';
import { NewsListComponent } from './components/news/list/news-lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartnersDetailsComponent } from './components/partners/details/partners-details.component';
import { PartnersListComponent } from './components/partners/list/partners-list.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RoutePaths } from './shared/constants/route-paths';

export const appRoutes: Routes = [
    { path: "", redirectTo: RoutePaths.Home, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "erasmus", component: ErasmusComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "partners", component: PartnersListComponent },
    { path: "partners/:id", component: PartnersDetailsComponent },
    { path: "news-items", component: NewsListComponent },
    { path: "news-items/:id", component: NewsDetailsComponent },
    { path: "mobility-students/study-page", component: MobilityStudentsStudyPageComponent },
    { path: "mobility-students/practice-page", component: MobilityStudentsPracticePageComponent },
    { path: "mobility-administration/study-page", component: MobilityAdministrationStudyPageComponent },
    { path: "mobility-administration/practice-page", component: MobilityAdministrationPracticePageComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

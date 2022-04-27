import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PartnersListComponent } from './components/partners/list/partners-list.component';
import { PartnersDetailsComponent } from './components/partners/details/partners-details.component';

import { registerLocaleData } from '@angular/common';
import localBg from '@angular/common/locales/bg';
import { ErasmusComponent } from './components/erasmus/erasmus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MobilityStudentsPracticePageComponent } from './components/mobility-students/practice-page/practice-page.component';
import { MobilityStudentsStudyPageComponent } from './components/mobility-students/study-page/study-page.component';
import { NewsDetailsComponent } from './components/news/details/news-details.component';
import { NewsListComponent } from './components/news/list/news-lists.component';
import { MobilityAdministrationPracticePageComponent } from './components/mobility-administration/practice-page/practice-page.component';
import { MobilityAdministrationStudyPageComponent } from './components/mobility-administration/study-page/study-page.component';
registerLocaleData(localBg);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    PartnersListComponent,
    PartnersDetailsComponent,
    NewsListComponent,
    NewsDetailsComponent,
    ErasmusComponent,
    ProjectsComponent,
    MobilityStudentsPracticePageComponent,
    MobilityStudentsStudyPageComponent,
    MobilityAdministrationPracticePageComponent,
    MobilityAdministrationStudyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "bg-BG"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

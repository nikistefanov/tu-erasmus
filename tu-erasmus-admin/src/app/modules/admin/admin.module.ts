import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUniversitiesComponent } from './components/admin-universities/admin-universities.component';
import { AdminUniversitiesCreateEditComponent } from './components/admin-universities/admin-universities-create-edit.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminNewsItemsComponent } from './components/admin-news-items/admin-news-items.component';
import { AdminNewsItemsCreateEditComponent } from './components/admin-news-items/admin-news-items-create-edit.component';
import { AdminDocumentsComponent } from './components/admin-documents/admin-documents.component';
import { AdminDocumentsCreateEditComponent } from './components/admin-documents/admin-documents-create-edit.component';
import { HOME_PAGE_EXTENDER } from './components/pages/page-extender/home-page-extender';
import { CompositePageExtender } from './components/pages/page-extender/composite-page-extender';
import { ERASMUS_PAGE_EXTENDER } from './components/pages/page-extender/erasmus-page-extender';
import { PROJECTS_PAGE_EXTENDER } from './components/pages/page-extender/projects-page-extender';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminUsersCreateComponent } from './components/admin-users/admin-users-create.component';
import { MOBILITY_STUDENTS_PAGES_EXTENDER } from './components/pages/page-extender/mobility-students-pages-extender';
import { MOBILITY_ADMINISTRATION_PAGES_EXTENDER } from './components/pages/page-extender/mobility-administration-pages-extender';
import { CREDIT_MOBILITY_PAGES_EXTENDER } from './components/pages/page-extender/credit-mobility-pages-extende';
import { PageBaseComponent } from './components/pages/base-page/base-page.component';

const COMPONENTS = [
    AdminComponent,
    AdminUniversitiesComponent,
    AdminUniversitiesCreateEditComponent,
    AdminNewsItemsComponent,
    AdminNewsItemsCreateEditComponent,
    PageBaseComponent,
    AdminDocumentsComponent,
    AdminDocumentsCreateEditComponent,
    AdminUsersComponent,
    AdminUsersCreateComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        AngularEditorModule
    ],
    providers: [
        CompositePageExtender,
        HOME_PAGE_EXTENDER,
        ERASMUS_PAGE_EXTENDER,
        PROJECTS_PAGE_EXTENDER,
        MOBILITY_STUDENTS_PAGES_EXTENDER,
        MOBILITY_ADMINISTRATION_PAGES_EXTENDER,
        CREDIT_MOBILITY_PAGES_EXTENDER
    ]
})
export class AdminModule { }

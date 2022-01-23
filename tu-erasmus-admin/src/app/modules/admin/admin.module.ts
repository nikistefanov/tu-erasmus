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
import { AdminHomeComponent } from './components/pages/admin-home/admin-home.component';
import { AdminNewsItemsComponent } from './components/admin-news-items/admin-news-items.component';
import { AdminNewsItemsCreateEditComponent } from './components/admin-news-items/admin-news-items-create-edit.component';
import { ErasmusPageComponent } from './components/pages/erasmus-page/erasmus-page.component';
import { AdminDocumentsComponent } from './components/admin-documents/admin-documents.component';
import { AdminDocumentsCreateEditComponent } from './components/admin-documents/admin-documents-create-edit.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { HOME_PAGE_EXTENDER } from './components/pages/page-extender/home-page-extender';
import { CompositePageExtender } from './components/pages/page-extender/composite-page-extender';
import { ERASMUS_PAGE_EXTENDER } from './components/pages/page-extender/erasmus-page-extender';
import { PROJECTS_PAGE_EXTENDER } from './components/pages/page-extender/projects-page-extender';

const COMPONENTS = [
    AdminComponent,
    AdminUniversitiesComponent,
    AdminUniversitiesCreateEditComponent,
    AdminHomeComponent,
    AdminNewsItemsComponent,
    AdminNewsItemsCreateEditComponent,
    ErasmusPageComponent,
    AdminDocumentsComponent,
    AdminDocumentsCreateEditComponent,
    ProjectsPageComponent
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
        PROJECTS_PAGE_EXTENDER
    ]
})
export class AdminModule { }

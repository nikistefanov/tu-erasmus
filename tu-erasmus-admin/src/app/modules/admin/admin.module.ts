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
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const COMPONENTS = [
    AdminComponent,
    AdminUniversitiesComponent,
    AdminUniversitiesCreateEditComponent,
    AdminHomeComponent
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

  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminUniversitiesComponent } from './components/admin-universities/admin-universities.component';
import { AdminUniversitiesCreateEditComponent } from './components/admin-universities/admin-universities-create-edit.component';

const COMPONENTS = [
    AdminHomeComponent,
    AdminUniversitiesComponent,
    AdminUniversitiesCreateEditComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

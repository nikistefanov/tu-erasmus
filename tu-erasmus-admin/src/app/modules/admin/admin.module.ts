import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminCountriesComponent } from './components/admin-countries/admin-countries.component';
import { AdminCountryCreateEditComponent } from './components/admin-countries/admin-country-create-edit.component';

const COMPONENTS = [
    AdminHomeComponent,
    AdminCountriesComponent,
    AdminCountryCreateEditComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }

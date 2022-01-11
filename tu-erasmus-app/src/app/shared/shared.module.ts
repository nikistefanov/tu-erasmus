import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const COMPONENTS = [
    NavbarComponent,
    LoaderComponent,
    DataTableComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  exports: [...COMPONENTS]
})
export class SharedModule { }

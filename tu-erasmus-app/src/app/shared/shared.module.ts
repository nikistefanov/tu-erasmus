import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableFormatCellPipe } from './pipes/data-table.pipe';

const COMPONENTS = [
    NavbarComponent,
    LoaderComponent,
    DataTableComponent
];

const COMMON = [
    DataTableFormatCellPipe
]

@NgModule({
  declarations: [...COMPONENTS, ...COMMON],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  exports: [...COMPONENTS, ...COMMON]
})
export class SharedModule { }

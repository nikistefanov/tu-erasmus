import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataTableFormatCellPipe } from './pipes/data-table.pipe';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
    NavbarComponent,
    LoaderComponent,
    DataTableComponent,
    SearchComponent
];

const COMMON = [
    DataTableFormatCellPipe
]

@NgModule({
  declarations: [...COMPONENTS, ...COMMON],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  exports: [...COMPONENTS, ...COMMON, MaterialModule]
})
export class SharedModule { }

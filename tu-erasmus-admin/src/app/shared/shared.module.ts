import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmComponent } from './components/dialog/confirm/confirm.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DataTableFormatCellPipe } from './pipes/data-table.pipe';


const COMPONENTS = [
    CardComponent,
    NavbarComponent,
    LoaderComponent,
    ConfirmComponent,
    NotFoundComponent,
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
    MaterialModule,
    AngularEditorModule
  ],
  providers: [],
  exports: [...COMPONENTS, ...COMMON]
})
export class SharedModule { }

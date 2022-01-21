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
import { EditorComponent } from './components/editor/editor.component';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { DocumentsDialogComponent } from './components/dialog/documents-dialog/documents-dialog.component';
import { ClipboardModule } from 'ngx-clipboard';

const COMPONENTS = [
    CardComponent,
    NavbarComponent,
    LoaderComponent,
    ConfirmComponent,
    DocumentsDialogComponent,
    NotFoundComponent,
    DataTableComponent,
    EditorComponent,
    FileUploadComponent
];

const COMMON = [
    DataTableFormatCellPipe
]

@NgModule({
  declarations: [...COMPONENTS, ...COMMON],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    AngularEditorModule,
    ClipboardModule
  ],
  providers: [],
  exports: [...COMPONENTS, ...COMMON]
})
export class SharedModule { }

import { Component, ErrorHandler } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { delay, first } from 'rxjs';
import { RootService } from '../../../../modules/http/root.service';
import { API_BASE, LOADING_TIME } from '../../../constants/constants';
import { IDocument } from '../../../models/db-models';
import { AlertService } from '../../../services/alert/alert.service';
import { ClipboardService } from 'ngx-clipboard';
import { AdminDocumentsCreateEditComponent } from '../../../../modules/admin/components/admin-documents/admin-documents-create-edit.component';

@Component({
  selector: 'app-documents-dialog',
  templateUrl: './documents-dialog.component.html'
})
export class DocumentsDialogComponent {
    loading: boolean = true;
    initialDocuments: IDocument[] = [];
    documents: IDocument[] = [];
    newDocument: IDocument;
    serverAddress: string = API_BASE;

    constructor(
        public dialogRef: MatDialogRef<DocumentsDialogComponent>,
        private rootService: RootService,
        private alertService: AlertService,
        private clipboardApi: ClipboardService,
        private dialog: MatDialog,
        private errorHandler: ErrorHandler
    ) {
        this.rootService.documents.getAll().pipe(
            first()
        ).subscribe({
            next: data => {
                this.initialDocuments = data;
                this.documents = this.initialDocuments;
                this.loading = false;
            },
            error: error => this.onCancel()
        })
    }

    onCopy(document: IDocument) {
        this.clipboardApi.copyFromContent(`${API_BASE}${document.url}`);
        this.alertService.showMessage("Успешно копиран адрес");
    }

    onCancel() {
        this.dialogRef.close();
    }

    onNewDocumentCreate() {
        const dialogRef = this.dialog.open(AdminDocumentsCreateEditComponent, {
            data: { label: "Качи документ"},
            panelClass: ["w-full", "md-lg:w-7/12"]
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.rootService.documents.create(result).pipe(
                    first()
                ).subscribe({
                    next: (resp: IDocument[]) => {
                        this.initialDocuments.push(resp[0]);
                        this.onSearch();
                    },
                    error: error => this.errorHandler.handleError(error)
                });
            }
        });
    }

    onSearch(value?: string) {
        if (!value || value === "") {
            this.documents = this.initialDocuments;
            return;
        }

        this.documents = this.initialDocuments.filter(x => x.name.toLowerCase().indexOf(value) > -1);
    }

}

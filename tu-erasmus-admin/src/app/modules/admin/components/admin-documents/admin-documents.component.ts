import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first, ReplaySubject } from 'rxjs';
import { ConfirmComponent } from '../../../../shared/components/dialog/confirm/confirm.component';
import { IUpdateDataTable, UpdateDataTableMehtods } from '../../../../shared/models/data-table';
import { IDocument } from '../../../../shared/models/db-models';
import { IConfirmationDialogData } from '../../../../shared/models/dialog';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../http/root.service';
import { AdminBase } from '../base/admin-base';
import { AdminDocumentsCreateEditComponent } from './admin-documents-create-edit.component';

@Component({
    selector: 'app-admin-documents',
    templateUrl: './admin-documents.component.html',
})
export class AdminDocumentsComponent extends AdminBase {
    headers = [
        "Име",
        "Тип",
        "Създаден на"
    ]

    columns = [
        "name",
        "ext",
        "created_at"
    ];
    documents: IDocument[] = [];
    update$: ReplaySubject<IUpdateDataTable> = new ReplaySubject<IUpdateDataTable>();
    loading: boolean = true;


    constructor(rootService: RootService,
        dialog: MatDialog,
        private errorHandler: ErrorHandlerService,
        private alertService: AlertService) {
        super(rootService, dialog)
        this.fetchData();
    }

    handleCreateDocument() {
        this.openDialog({ label: "Качи документ" }, AdminDocumentsCreateEditComponent, this.createDocument.bind(this))
    }

    handleDeleteDocument(document: IDocument) {
        const data: IConfirmationDialogData = {
            message: `Сигурни ли сте, че искате да изтриете <b class="whitespace-nowrap">${document.name}</b> от списъка.`,
            buttonColor: "warn"
        }
        this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, document));
    }

    private fetchData() {
        this.rootService.documents.getAll().pipe(
            first()
        ).subscribe({
            next: (resp: IDocument[]) => {
                this.documents = resp;
                this.loading = false;
            },
            error: error => this.errorHandler.handleError(error)
        })
    }

    private createDocument(document: IDocument) {
        this.rootService.documents.create(document).pipe(
            first()
        ).subscribe({
            next: (resp: IDocument[]) => {
                this.updateTable(resp[0], UpdateDataTableMehtods.Add);
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private deleteContact(document: IDocument) {
        this.rootService.documents.delete(document.id).pipe(
            first()
        ).subscribe(resp => {
            const removeNDocument = this.documents.find(i => i.id === resp.id);

            if (removeNDocument) {
                this.update$.next({ item: removeNDocument, method: UpdateDataTableMehtods.Delete });
            }
        });
    }

    private updateTable(data: IDocument, method: UpdateDataTableMehtods) {
        this.update$.next({ item: data, method });
        this.alertService.showMessage("Промените са запазени");
    }
}

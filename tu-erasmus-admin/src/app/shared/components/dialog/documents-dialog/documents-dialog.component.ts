import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { delay, first } from 'rxjs';
import { RootService } from '../../../../modules/http/root.service';
import { LOADING_TIME } from '../../../constants/constants';
import { IDocument } from '../../../models/db-models';
import { AlertService } from '../../../services/alert/alert.service';

@Component({
  selector: 'app-documents-dialog',
  templateUrl: './documents-dialog.component.html'
})
export class DocumentsDialogComponent {
    loading: boolean = true;
    documents: IDocument[] = [];

    constructor(
        public dialogRef: MatDialogRef<DocumentsDialogComponent>,
        private rootService: RootService,
        private alertService: AlertService
    ) {
        this.rootService.documents.getAll().pipe(
            first(),
            delay(LOADING_TIME)
        ).subscribe({
            next: data => {
                this.documents = data;
                this.loading = false;
            },
            error: error => this.onCancel()
        })
    }

    onCopy() {
        this.alertService.showMessage("Успешно копиран адрес");
    }

    onCancel() {
        this.dialogRef.close();
    }

}

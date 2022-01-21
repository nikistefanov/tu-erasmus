import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { delay, first } from 'rxjs';
import { RootService } from '../../../../modules/http/root.service';
import { API_BASE, LOADING_TIME } from '../../../constants/constants';
import { IDocument } from '../../../models/db-models';
import { AlertService } from '../../../services/alert/alert.service';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-documents-dialog',
  templateUrl: './documents-dialog.component.html'
})
export class DocumentsDialogComponent {
    loading: boolean = true;
    documents: IDocument[] = [];
    serverAddress: string = API_BASE;

    constructor(
        public dialogRef: MatDialogRef<DocumentsDialogComponent>,
        private rootService: RootService,
        private alertService: AlertService,
        private clipboardApi: ClipboardService
    ) {
        this.rootService.documents.getAll().pipe(
            first(),
            delay(LOADING_TIME)
        ).subscribe({
            next: data => {
                this.documents = data;
                console.log(data);

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

}

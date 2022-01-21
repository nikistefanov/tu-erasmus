import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDocument } from '../../../../shared/models/db-models';
import { ICreateEditDialogData } from '../../../../shared/models/dialog';


@Component({
    selector: 'app-admin-documents-create-edit',
    templateUrl: './admin-documents-create-edit.component.html'
})
export class AdminDocumentsCreateEditComponent {
    form: FormGroup;
    file: FormControl = new FormControl("", [Validators.required]);

    constructor(
        public dialogRef: MatDialogRef<AdminDocumentsCreateEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ICreateEditDialogData) {
        this.form = new FormGroup({
            file: this.file
        });
    }

    save(document: any) {
        if (!this.form.valid) {
            return;
        }

        const data = new FormData();
        data.append("files", document.file);

        this.dialogRef.close(data);
    }

    onCancel() {
        this.dialogRef.close();
    }
}


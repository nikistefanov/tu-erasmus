import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INewsItem } from '../../../../shared/models/db-models';
import { ICreateEditDialogData } from '../../../../shared/models/dialog';


@Component({
    selector: 'app-admin-news-items-create-edit',
    templateUrl: './admin-news-items-create-edit.component.html'
})
export class AdminNewsItemsCreateEditComponent {
    form: FormGroup;
    name: FormControl = new FormControl("", [Validators.required]);
    body: FormControl = new FormControl();
    hide: FormControl = new FormControl(false);

    constructor(
        public dialogRef: MatDialogRef<AdminNewsItemsCreateEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ICreateEditDialogData) {
        this.form = new FormGroup({
            name: this.name,
            body: this.body,
            hide: this.hide
        });

        if (data.item) {
            this.setData(data.item as INewsItem);
        }
    }

    save(newsItem: INewsItem) {
        if (!this.form.valid) {
            return;
        }

        this.dialogRef.close(newsItem);
    }

    onCancel() {
        this.dialogRef.close();
    }

    private setData(newsItem: INewsItem) {
        this.name.setValue(newsItem.name);
        this.body.setValue(newsItem.body);
        this.hide.setValue(newsItem.hide);
    }
}


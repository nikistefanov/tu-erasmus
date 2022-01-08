import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICountry } from '../../../../shared/models/db-models';
import { ICreateEditDialogData } from '../../../../shared/models/dialog';
import { getEmptyCountryValues } from '../../../../shared/utilities/helpers';

@Component({
    selector: 'app-admin-country-create-edit',
    templateUrl: './admin-country-create-edit.component.html'
})
export class AdminCountryCreateEditComponent {
    public dialogData: ICreateEditDialogData;
    public formDataModel!: ICountry;

    constructor(
        public dialogRef: MatDialogRef<AdminCountryCreateEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ICreateEditDialogData) {
        this.formDataModel = getEmptyCountryValues();
        this.dialogData = data;

        if (data.item) {
            this.formDataModel = data.item as ICountry;
        }
    }

    save(country: ICountry) {
        this.dialogRef.close(country);
    }

    onCancel() {
        this.dialogRef.close();
    }
}


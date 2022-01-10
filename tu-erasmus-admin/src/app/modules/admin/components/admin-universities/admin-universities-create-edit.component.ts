import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COUNTRIES } from '../../../../shared/constants/countries';
import { IUniversity } from '../../../../shared/models/db-models';
import { ICreateEditDialogData } from '../../../../shared/models/dialog';
import { getEmptyUniversityValues } from '../../../../shared/utilities/helpers';

@Component({
    selector: 'app-admin-universities-create-edit',
    templateUrl: './admin-universities-create-edit.component.html'
})
export class AdminUniversitiesCreateEditComponent {
    public dialogData: ICreateEditDialogData;
    public formDataModel!: IUniversity;
    public countries = COUNTRIES;

    constructor(
        public dialogRef: MatDialogRef<AdminUniversitiesCreateEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ICreateEditDialogData) {
        this.formDataModel = getEmptyUniversityValues();
        this.dialogData = data;

        if (data.item) {
            this.formDataModel = data.item as IUniversity;
        }
    }

    save(university: IUniversity) {
        this.dialogRef.close(university);
    }

    onCancel() {
        this.dialogRef.close();
    }
}


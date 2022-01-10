import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { COUNTRIES_NAMES } from '../../../../shared/constants/countries';
import { IUniversity } from '../../../../shared/models/db-models';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ICreateEditDialogData } from '../../../../shared/models/dialog';


@Component({
    selector: 'app-admin-universities-create-edit',
    templateUrl: './admin-universities-create-edit.component.html'
})
export class AdminUniversitiesCreateEditComponent {
    form: FormGroup;
    name: FormControl = new FormControl("", [Validators.required]);
    description: FormControl = new FormControl();
    countryName: FormControl = new FormControl("", [Validators.required]);

    filteredOptions: Observable<string[]>;


    editorConfig: AngularEditorConfig = {
        editable: true,
        minHeight: "300px"
    };

    private countries = COUNTRIES_NAMES;

    constructor(
        public dialogRef: MatDialogRef<AdminUniversitiesCreateEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ICreateEditDialogData) {
        this.form = new FormGroup({
            name: this.name,
            description: this.description,
            countryName: this.countryName
        });

        this.filteredOptions = this.countryName.valueChanges.pipe(
            startWith(""),
            map(value => this.filter(value)),
        );

        if (data.item) {
            this.setData(data.item as IUniversity);
        }
    }

    save(university: IUniversity) {
        if (this.countries.indexOf(this.countryName.value) === -1) {
            this.countryName.setValue("");
        } else {
            this.dialogRef.close(university);
        }
    }

    onCancel() {
        this.dialogRef.close();
    }

    private filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.countries.filter(country => country.toLowerCase().includes(filterValue));
    }

    private setData(uni: IUniversity) {
        this.name.setValue(uni.name);
        this.description.setValue(uni.description);
        this.countryName.setValue(uni.countryName);
    }
}


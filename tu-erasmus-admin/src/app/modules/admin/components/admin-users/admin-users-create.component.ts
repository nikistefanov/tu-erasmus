import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { IUser } from '../../../../shared/models/db-models';
import { ICreateEditDialogData } from '../../../../shared/models/dialog';


@Component({
    selector: 'app-admin-users-create',
    templateUrl: './admin-users-create.component.html'
})
export class AdminUsersCreateComponent {
    form: FormGroup;
    username: FormControl = new FormControl("", [Validators.required]);
    email: FormControl = new FormControl("", [Validators.required, Validators.email]);
    password: FormControl = new FormControl("", [Validators.required]);

    constructor(
        public dialogRef: MatDialogRef<AdminUsersCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ICreateEditDialogData) {
        this.form = new FormGroup({
            username: this.username,
            email: this.email,
            password: this.password,
        });
    }

    save(user: IUser) {
        user.name = user.username;
        this.dialogRef.close(user);
    }

    onCancel() {
        this.dialogRef.close();
    }
}


import { Component, ErrorHandler } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { IUser } from '../../../../shared/models/db-models';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent {
    form: FormGroup;
    currentPassword: FormControl = new FormControl("", [Validators.required]);
    newPassword: FormControl = new FormControl("", [Validators.required]);
    confirmNewPassword: FormControl = new FormControl("", [Validators.required, this.validateAreEqual.bind(this)]);

    constructor(private authService: AuthService, private alertService: AlertService, private errorService: ErrorHandler) {
        this.form = new FormGroup({
            currentPassword: this.currentPassword,
            newPassword: this.newPassword,
            confirmNewPassword: this.confirmNewPassword
        });
    }

    handleClick(data: IChangePassword) {
        const userInfo = this.authService.getUserInfo();
        this.authService.update(userInfo.user.username, data.currentPassword, data.newPassword).pipe(
            first()
        ).subscribe({
            next: data => this.alertService.showMessage("Паролата е сменена"),
            error: error => this.errorService.handleError(error)

        });
    }

    private validateAreEqual(fieldControl: FormControl) {
        return fieldControl.value === this.newPassword.value ? null : {
            NotEqual: true
        };
    }
}

interface IChangePassword {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

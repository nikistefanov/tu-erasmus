import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { delay, first, ReplaySubject } from 'rxjs';
import { ConfirmComponent } from '../../../../shared/components/dialog/confirm/confirm.component';
import { LOADING_TIME } from '../../../../shared/constants/constants';
import { IUpdateDataTable, UpdateDataTableMehtods } from '../../../../shared/models/data-table';
import { IUser } from '../../../../shared/models/db-models';
import { IConfirmationDialogData } from '../../../../shared/models/dialog';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { AuthService } from '../../../auth/auth.service';
import { AdminBase } from '../base/admin-base';
import { AdminUsersCreateComponent } from './admin-users-create.component';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
})
export class AdminUsersComponent extends AdminBase {
    headers = [
        "Потребителско име",
        "Електронна поща"
    ]

    columns = [
        "username",
        "email"
    ];

    users: IUser[] = [];
    update$: ReplaySubject<IUpdateDataTable> = new ReplaySubject<IUpdateDataTable>();
    loading: boolean = true;

    constructor(private authService: AuthService,
        dialog: MatDialog,
        private errorHandler: ErrorHandlerService,
        private alertService: AlertService) {
            super(dialog);
            this.fetchData();
    }

    handleCreateUser() {
        this.openDialog({ label: "Създай потребител" }, AdminUsersCreateComponent, this.createUser.bind(this))
    }

    handleDeleteUser(user: IUser) {
        const data: IConfirmationDialogData = {
            message: `Сигурни ли сте, че искате да изтриете <b class="whitespace-nowrap">${user.username}</b> от списъка.`,
            buttonColor: "warn"
        }
        this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, user));
    }

    private fetchData() {
        this.authService.getAll().pipe(
            first(),
            delay(LOADING_TIME)
        ).subscribe({
            next: data => {
                const adminIndex = data.findIndex(x => x.role?.id === 1);
                data.splice(adminIndex , 1);
                this.users = data;
                this.loading = false;
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private createUser(user: IUser) {
        this.authService.register(user).pipe(
            first()
        ).subscribe({
            next: data => {
                this.update$.next({ item: data.user, method: UpdateDataTableMehtods.Add });
                this.alertService.showMessage("Създаден потребител");
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private deleteContact(user: IUser) {
        const userId = user.id;
        this.authService.delete(user.id).pipe(
            first()
        ).subscribe((resp) => {
            const removedUser = this.users.find(i => i.id === userId);

            if (removedUser) {
                this.update$.next({ item: removedUser, method: UpdateDataTableMehtods.Delete });
            }
        });
    }
}

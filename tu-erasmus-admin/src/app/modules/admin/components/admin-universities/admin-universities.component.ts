import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first, ReplaySubject } from 'rxjs';
import { ConfirmComponent } from '../../../../shared/components/dialog/confirm/confirm.component';
import { COUNTRIES } from '../../../../shared/constants/countries';
import { IUpdateDataTable, UpdateDataTableMehtods } from '../../../../shared/models/data-table';
import { IUniversity } from '../../../../shared/models/db-models';
import { IConfirmationDialogData } from '../../../../shared/models/dialog';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../http/root.service';
import { AdminBase } from '../base/admin-base';
import { AdminUniversitiesCreateEditComponent } from './admin-universities-create-edit.component';

@Component({
    selector: 'app-admin-universities',
    templateUrl: './admin-universities.component.html',
})
export class AdminUniversitiesComponent extends AdminBase {
    headers = [
        "Име",
        "Държава"
    ]

    columns = [
        "name",
        "countryName"
    ];
    universities: IUniversity[] = [];
    update$: ReplaySubject<IUpdateDataTable> = new ReplaySubject<IUpdateDataTable>();
    loading: boolean = true;


    constructor(rootService: RootService,
        dialog: MatDialog,
        private errorHandler: ErrorHandlerService,
        private alertService: AlertService) {
        super(rootService, dialog)
        this.fetchData();
    }

    handleUpdateUniversity(university: IUniversity) {
        const universityData = Object.assign({}, university);
        this.openDialog({ label: "Промяна на партньор", item: universityData }, AdminUniversitiesCreateEditComponent, this.updateUniversity.bind(this), universityData.id);
    }

    handleCreateUniversity() {
        this.openDialog({ label: "Създай партньор" }, AdminUniversitiesCreateEditComponent, this.createUniversity.bind(this))
    }

    handleDeleteUniversity(university: IUniversity) {
        const data: IConfirmationDialogData = {
            message: `Сигурни ли сте, че искате да изтриете <b class="whitespace-nowrap">${university.name}</b> от списъка.`,
            buttonColor: "warn"
        }
        this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, university));
    }

    private fetchData() {
        this.rootService.universities.getAll().pipe(
            first()
        ).subscribe({
            next: (resp: IUniversity[]) => {
                this.universities = resp;
                this.loading = false;
            },
            error: error => this.errorHandler.handleError(error)
        })
    }

    private createUniversity(university: IUniversity) {
        this.rootService.universities.create(university).pipe(
            first()
        ).subscribe({
            next: (resp: IUniversity) => {
                this.update$.next({ item: resp, method: UpdateDataTableMehtods.Add });
                this.alertService.showMessage("Промените са запазени");
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private updateUniversity(university: IUniversity, updateUniversitytId: number) {
        this.rootService.universities.update(university, updateUniversitytId).pipe(
            first()
        ).subscribe({
            next: (resp: IUniversity) => {
                this.update$.next({ item: resp, method: UpdateDataTableMehtods.Update });
                this.alertService.showMessage("Промените са запазени");
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private deleteContact(university: IUniversity) {
        this.rootService.universities.delete(university.id).pipe(
            first()
        ).subscribe((resp: IUniversity) => {
            const removedUniversity = this.universities.find(i => i.id === resp.id);

            if (removedUniversity) {
                this.update$.next({ item: removedUniversity, method: UpdateDataTableMehtods.Delete });
            }
        });
    }
}

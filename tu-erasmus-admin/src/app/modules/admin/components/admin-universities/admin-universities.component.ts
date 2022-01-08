import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first, ReplaySubject } from 'rxjs';
import { ConfirmComponent } from '../../../../shared/components/dialog/confirm/confirm.component';
import { IUpdateDataTable, UpdateDataTableMehtods } from '../../../../shared/models/data-table';
import { ICountry } from '../../../../shared/models/db-models';
import { IConfirmationDialogData } from '../../../../shared/models/dialog';
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
        "Абревиатура"
    ]

    columns = [
        "name",
        "abbreviations"
    ];
    countries: ICountry[] = [];
    update$: ReplaySubject<IUpdateDataTable> = new ReplaySubject<IUpdateDataTable>();
    loading: boolean = true;


    constructor(rootService: RootService,
        dialog: MatDialog,
        errorHandler: ErrorHandlerService) {
        super(rootService, dialog, errorHandler)
        this.fetchData();
    }

    handleUpdateCountry(country: ICountry) {
        const countryData = Object.assign({}, country);
        this.openDialog({ label: "Промяна на партньорска държава", item: countryData }, AdminUniversitiesCreateEditComponent, this.updateContact.bind(this), countryData.id);
    }

    handleCreateCountry() {
        this.openDialog({ label: "Създай партньорска държава" }, AdminUniversitiesCreateEditComponent, this.createCountry.bind(this))
    }

    handleDeleteCountry(country: ICountry) {
        const data: IConfirmationDialogData = {
            message: `Сигурни ли сте, че искате да изтриете <b class="whitespace-nowrap">${country.name}</b> от списъка.`,
            buttonColor: "warn"
        }
        this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, country));
    }

    private fetchData() {
        this.rootService.countries.getAll().pipe(
            first()
        ).subscribe({
            next: (resp: ICountry[]) => {
                this.countries = resp;
                this.loading = false;
            },
            error: error => this.errorHandler.handleError(error)
        })
    }

    private createCountry(country: ICountry) {
        this.rootService.countries.create(country).pipe(
            first()
        ).subscribe({
            next: (resp: ICountry) => {
                this.update$.next({ item: resp, method: UpdateDataTableMehtods.Add });
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private updateContact(country: ICountry, updateCountrytId: number) {
        this.rootService.countries.update(country, updateCountrytId).pipe(
            first()
        ).subscribe({
            next: (resp: ICountry) => {
                this.update$.next({ item: resp, method: UpdateDataTableMehtods.Update });
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private deleteContact(country: ICountry) {
        this.rootService.countries.delete(country.id).pipe(
            first()
        ).subscribe((resp: ICountry) => {
            const removedCountry = this.countries.find(i => i.id === resp.id);

            if (removedCountry) {
                this.update$.next({ item: removedCountry, method: UpdateDataTableMehtods.Delete });
            }
        });
    }
}

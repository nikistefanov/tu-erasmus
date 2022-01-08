import { ComponentType } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, first, ReplaySubject } from 'rxjs';
import { ConfirmComponent } from '../../../../shared/components/dialog/confirm/confirm.component';
import { IUpdateDataTable, UpdateDataTableMehtods } from '../../../../shared/models/data-table';
import { ICountry } from '../../../../shared/models/db-models';
import { IConfirmationDialogData, ICreateEditDialogData } from '../../../../shared/models/dialog';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../http/root.service';
import { AdminCountryCreateEditComponent } from './admin-country-create-edit.component';

@Component({
  selector: 'app-admin-countries',
  templateUrl: './admin-countries.component.html',
})
export class AdminCountriesComponent {
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


    constructor(private rootService: RootService,
        private dialog: MatDialog,
        private errorHandler: ErrorHandlerService) {
        this.fetchData();
    }

    handleUpdateCountry(country: ICountry) {
        const countryData = Object.assign({}, country);
        this.openDialog({ label: "Промяна на партньорска държава", item: countryData }, AdminCountryCreateEditComponent, this.updateContact.bind(this), countryData.id);
    }

    handleCreateCountry() {
        this.openDialog({ label: "Създай партньорска държава" }, AdminCountryCreateEditComponent, this.createCountry.bind(this))
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

    private openDialog(dialogData: ICreateEditDialogData | IConfirmationDialogData, component: ComponentType<AdminCountryCreateEditComponent | ConfirmComponent>, cb: Function, updateCountrytId?: number) {
        const dialogRef = this.dialog.open(component, {
            data: dialogData,
            panelClass: ["w-full", "md-lg:w-7/12"]
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                cb(result, updateCountrytId);
            }
        });
    }

    private createCountry(country: ICountry) {
        this.rootService.countries.create(country).pipe(
            first()
        ).subscribe({
            next: (resp: ICountry) => {
                this.update$.next({item: resp, method: UpdateDataTableMehtods.Add});
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private updateContact(country: ICountry, updateCountrytId: number) {
        this.rootService.countries.update(country, updateCountrytId).pipe(
            first()
        ).subscribe({
            next: (resp: ICountry) => {
                this.update$.next({item: resp, method: UpdateDataTableMehtods.Update});
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
                this.update$.next({item: removedCountry, method: UpdateDataTableMehtods.Delete});
            }
        });
    }
}
import { ComponentType } from "@angular/cdk/overlay";
import { MatDialog } from "@angular/material/dialog";
import { IDataItem } from "../../../../shared/models/db-models";
import { IConfirmationDialogData, ICreateEditDialogData } from "../../../../shared/models/dialog";
import { ErrorHandlerService } from "../../../../shared/services/error-handler/error-handler.service";
import { RootService } from "../../../http/root.service";

export class AdminBase {
    constructor(protected rootService: RootService,
        protected dialog: MatDialog,
        protected errorHandler: ErrorHandlerService) {}

    // handleUpdateCountry(item: IDataItem, dialogComponent: ComponentType<any>) {
    //     const copyItem = Object.assign({}, item);
    //     this.openDialog({ label: "Промяна на партньорска държава", item: copyItem }, dialogComponent, this.updateContact.bind(this), copyItem.id);
    // }

    // handleCreateCountry() {
    //     this.openDialog({ label: "Създай партньорска държава" }, AdminCountryCreateEditComponent, this.createCountry.bind(this))
    // }

    // handleDeleteCountry(country: ICountry) {
    //     const data: IConfirmationDialogData = {
    //         message: `Сигурни ли сте, че искате да изтриете <b class="whitespace-nowrap">${country.name}</b> от списъка.`,
    //         buttonColor: "warn"
    //     }
    //     this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, country));
    // }

    // fetchData(type: string) {
    //     this.rootService.countries.getAll().pipe(
    //         first()
    //     ).subscribe({
    //         next: (resp: ICountry[]) => {
    //             this.countries = resp;
    //             this.loading = false;
    //         },
    //         error: error => this.errorHandler.handleError(error)
    //     })
    // }

    openDialog(dialogData: ICreateEditDialogData | IConfirmationDialogData, component: ComponentType<any>, cb: Function, updateItemId?: number) {
        const dialogRef = this.dialog.open(component, {
            data: dialogData,
            panelClass: ["w-full", "md-lg:w-7/12"]
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                cb(result, updateItemId);
            }
        });
    }

    // private createCountry(country: ICountry) {
    //     this.rootService.countries.create(country).pipe(
    //         first()
    //     ).subscribe({
    //         next: (resp: ICountry) => {
    //             this.update$.next({item: resp, method: UpdateDataTableMehtods.Add});
    //         },
    //         error: error => this.errorHandler.handleError(error)
    //     });
    // }

    // private updateContact(country: ICountry, updateCountrytId: number) {
    //     this.rootService.countries.update(country, updateCountrytId).pipe(
    //         first()
    //     ).subscribe({
    //         next: (resp: ICountry) => {
    //             this.update$.next({item: resp, method: UpdateDataTableMehtods.Update});
    //         },
    //         error: error => this.errorHandler.handleError(error)
    //     });
    // }

    // private deleteContact(country: ICountry) {
    //     this.rootService.countries.delete(country.id).pipe(
    //         first()
    //     ).subscribe((resp: ICountry) => {
    //         const removedCountry = this.countries.find(i => i.id === resp.id);

    //         if (removedCountry) {
    //             this.update$.next({item: removedCountry, method: UpdateDataTableMehtods.Delete});
    //         }
    //     });
    // }
}

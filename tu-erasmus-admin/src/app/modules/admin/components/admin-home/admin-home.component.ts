import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { IHomePage } from '../../../../shared/models/db-models';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../http/root.service';
import { AdminBase } from '../base/admin-base';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
})
export class AdminHomeComponent extends AdminBase {
    loading: boolean = true;
    editorConfig: AngularEditorConfig = {
        editable: true,
        minHeight: "300px"
    };

    form: FormGroup;
    heading: FormControl = new FormControl("", [Validators.required]);
    subheading: FormControl = new FormControl("", [Validators.required]);
    body: FormControl = new FormControl("", [Validators.required]);
    hideMap: FormControl = new FormControl();

    constructor(rootService: RootService,
        dialog: MatDialog,
        errorHandler: ErrorHandlerService) {
        super(rootService, dialog, errorHandler)
        this.fetchData();
    }

    save() {
        if (!this.form.valid) {
            return;
        }

        this.rootService.homePage.update(this.form.value);
    }

    // handleUpdateUniversity(university: IUniversity) {
    //     const universityData = Object.assign({}, university);
    //     this.openDialog({ label: "Промяна на партньорски университет", item: universityData }, AdminUniversitiesCreateEditComponent, this.updateUniversity.bind(this), universityData.id);
    // }

    // handleCreateUniversity() {
    //     this.openDialog({ label: "Създай партньорски университет" }, AdminUniversitiesCreateEditComponent, this.createUniversity.bind(this))
    // }

    // handleDeleteUniversity(university: IUniversity) {
    //     const data: IConfirmationDialogData = {
    //         message: `Сигурни ли сте, че искате да изтриете <b class="whitespace-nowrap">${university.name}</b> от списъка.`,
    //         buttonColor: "warn"
    //     }
    //     this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, university));
    // }

    private fetchData() {
        this.rootService.homePage.get().pipe(
            first()
        ).subscribe({
            next: (data: IHomePage) => {
                this.setData(data);
            },
            error: error => this.errorHandler.handleError(error)
        })
    }

    private setData(data: IHomePage) {
        this.heading.setValue(data.heading);
        this.subheading.setValue(data.subheading);
        this.body.setValue(data.body);
        this.hideMap.setValue(data.hideMap);

        this.form = new FormGroup({
            heading: this.heading,
            subheading: this.subheading,
            body: this.body,
            hideMap: this.hideMap,
        });
        this.loading = false;
    }

    // private createUniversity(university: IUniversity) {
    //     this.rootService.universities.create(university).pipe(
    //         first()
    //     ).subscribe({
    //         next: (resp: IUniversity) => {
    //             this.update$.next({ item: resp, method: UpdateDataTableMehtods.Add });
    //         },
    //         error: error => this.errorHandler.handleError(error)
    //     });
    // }

    // private updateUniversity(university: IUniversity, updateUniversitytId: number) {
    //     this.rootService.universities.update(university, updateUniversitytId).pipe(
    //         first()
    //     ).subscribe({
    //         next: (resp: IUniversity) => {
    //             this.update$.next({ item: resp, method: UpdateDataTableMehtods.Update });
    //         },
    //         error: error => this.errorHandler.handleError(error)
    //     });
    // }

    // private deleteContact(University: IUniversity) {
    //     this.rootService.universities.delete(University.id).pipe(
    //         first()
    //     ).subscribe((resp: IUniversity) => {
    //         const removedUniversity = this.universities.find(i => i.id === resp.id);

    //         if (removedUniversity) {
    //             this.update$.next({ item: removedUniversity, method: UpdateDataTableMehtods.Delete });
    //         }
    //     });
    // }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { IHomePage } from '../../../../shared/models/db-models';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../http/root.service';
import { AdminBase } from '../base/admin-base';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
})
export class AdminHomeComponent {
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

    constructor(private rootService: RootService,
        private dialog: MatDialog,
        private errorHandler: ErrorHandlerService,
        private alertService: AlertService) {
        this.fetchData();
    }

    save() {
        if (!this.form.valid) {
            return;
        }

        this.rootService.homePage.update(this.form.value).pipe(
            first()
        ).subscribe({
            next: data => this.alertService.showMessage("Промените са запазени"),
            error: error => this.errorHandler.handleError(error)
        });
    }

    private fetchData() {
        this.rootService.homePage.get().pipe(
            first()
        ).subscribe({
            next: (data: IHomePage) => {
                this.setData(data);
            },
            error: error => {
                if (error.status === 404) {
                    this.createForm();
                } else {
                    this.errorHandler.handleError(error);
                }
            }
        })
    }

    private setData(data: IHomePage) {
        this.heading.setValue(data.heading);
        this.subheading.setValue(data.subheading);
        this.body.setValue(data.body);
        this.hideMap.setValue(!!data.hideMap);

        this.createForm();
    }

    private createForm() {
        this.form = new FormGroup({
            heading: this.heading,
            subheading: this.subheading,
            body: this.body,
            hideMap: this.hideMap,
        });

        this.loading = false;
    }
}

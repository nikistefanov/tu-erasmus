import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { IHomePage } from '../../../../shared/models/db-models';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../http/root.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
    selector: 'app-erasmus-page',
    templateUrl: './erasmus-page.component.html',
})
export class ErasmusPageComponent {
    loading: boolean = true;
    editorConfig: AngularEditorConfig = {
        editable: true,
        minHeight: "300px"
    };

    form: FormGroup;
    heading: FormControl = new FormControl("", [Validators.required]);
    body: FormControl = new FormControl("", [Validators.required]);

    constructor(private rootService: RootService,
        private errorHandler: ErrorHandlerService,
        private alertService: AlertService) {
        this.fetchData();
    }

    save() {
        if (!this.form.valid) {
            return;
        }

        this.rootService.erasmusPage.update(this.form.value).pipe(
            first()
        ).subscribe({
            next: data => this.alertService.showMessage("Промените са запазени"),
            error: error => this.errorHandler.handleError(error)
        });
    }

    private fetchData() {
        this.rootService.erasmusPage.get().pipe(
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
        this.body.setValue(data.body);

        this.createForm();
    }

    private createForm() {
        this.form = new FormGroup({
            heading: this.heading,
            body: this.body,
        });

        this.loading = false;
    }
}

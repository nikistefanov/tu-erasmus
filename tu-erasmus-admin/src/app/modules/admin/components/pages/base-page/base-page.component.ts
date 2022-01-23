import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IPageExtenderSettings } from '../../../../../shared/constants/page-extender';
import { RoutePaths } from '../../../../../shared/constants/route-paths';
import { IPage } from '../../../../../shared/models/db-models';
import { AlertService } from '../../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../../http/root.service';
import { CompositePageExtender } from '../page-extender/composite-page-extender';

export class PageBaseComponent {
    headingLabel: string;
    toggleLabel: string | undefined;
    loading: boolean = true;

    form: FormGroup;
    heading: FormControl = new FormControl("", [Validators.required]);
    body: FormControl = new FormControl("", [Validators.required]);
    toggle: FormControl = new FormControl();

    private activeRoute: string;

    constructor(protected rootService: RootService,
        protected errorHandler: ErrorHandlerService,
        protected alertService: AlertService,
        private route: ActivatedRoute,
        private extender: CompositePageExtender) {

        this.activeRoute = this.route.snapshot.data["route"];
        this.init();
    }

    save() {
        if (!this.form.valid) {
            return;
        }

        this.extender.save(this.activeRoute, this.form.value)?.pipe(
            first()
        ).subscribe({
            next: data => this.alertService.showMessage("Промените са запазени"),
            error: error => this.errorHandler.handleError(error)
        });
    }

    private fetchData() {
        this.extender.fetchData(this.activeRoute)?.pipe(
            first()
        ).subscribe({
            next: (data: IPage) => {
                this.setData(data);
            },
            error: error => {
                if (error.status === 404) {
                    this.createForm();
                } else {
                    this.errorHandler.handleError(error);
                }
            }
        });
    }

    private setData(data: IPage) {
        this.heading.setValue(data.heading);
        this.body.setValue(data.body);

        if (data.toggle) {
            this.toggle.setValue(data.toggle);
        }

        this.createForm();
    }

    private createForm() {
        this.form = new FormGroup({
            heading: this.heading,
            body: this.body,
            ...(this.toggleLabel && { toggle: this.toggle })
        });

        this.loading = false;
    }

    private init() {
        const settings: IPageExtenderSettings | undefined = this.extender.getPageSettings(this.activeRoute);

        if (!settings) {
            return;
        }

        this.headingLabel = settings.heading;
        this.toggleLabel = settings.toggleLabel;

        this.fetchData();
    }
}

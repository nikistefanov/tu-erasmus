import { Component } from '@angular/core';
import { ErrorHandlerService } from '../../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../../http/root.service';
import { AlertService } from '../../../../../shared/services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { CompositePageExtender } from '../page-extender/composite-page-extender';
import { PageBaseComponent } from '../base-page/base-page.component';

@Component({
    selector: 'app-projects-page',
    templateUrl: '../base-page/base-page.component.html',
})
export class ProjectsPageComponent extends PageBaseComponent {
    constructor(rootService: RootService,
        errorHandler: ErrorHandlerService,
        alertService: AlertService,
        route: ActivatedRoute,
        extender: CompositePageExtender) {
        super(rootService, errorHandler, alertService, route, extender);
    }
}

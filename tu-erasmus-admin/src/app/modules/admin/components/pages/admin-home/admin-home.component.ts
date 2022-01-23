import { Component } from '@angular/core';
import { ErrorHandlerService } from '../../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../../http/root.service';
import { AlertService } from '../../../../../shared/services/alert/alert.service';
import { PageBaseComponent } from '../base-page/base-page.component';
import { CompositePageExtender } from '../page-extender/composite-page-extender';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-admin-home',
    templateUrl: '../base-page/base-page.component.html',
})
export class AdminHomeComponent extends PageBaseComponent {

    constructor(rootService: RootService,
        errorHandler: ErrorHandlerService,
        alertService: AlertService,
        route: ActivatedRoute,
        extender: CompositePageExtender) {
        super(rootService, errorHandler, alertService, route, extender);
    }
}

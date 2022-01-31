import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../../../http/root.service';
import { PageBaseComponent } from '../../base-page/base-page.component';
import { CompositePageExtender } from '../../page-extender/composite-page-extender';

@Component({
    selector: 'app-mobility-students-practice-page',
    templateUrl: '../../base-page/base-page.component.html',
})
export class MobilityStudentsPracticePageComponent extends PageBaseComponent {
    constructor(rootService: RootService,
        errorHandler: ErrorHandlerService,
        alertService: AlertService,
        route: ActivatedRoute,
        extender: CompositePageExtender) {
        super(rootService, errorHandler, alertService, route, extender);
    }
}


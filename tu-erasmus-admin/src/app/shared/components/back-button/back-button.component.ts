import { Location } from "@angular/common";
import { Component, HostListener, Inject, Input } from "@angular/core";
import { Router } from "@angular/router";
import { RoutePaths } from "../../constants/route-paths";

@Component({
    selector: "tu-back-button",
    templateUrl: "./back-button.component.html",
    styleUrls: ["./back-button.component.scss"]
})
export class BackButtonComponent {
    @Input() text: string = "Назад";
    @Input() isMain: boolean = true;
    sticked: boolean = false;

    constructor(
        private readonly router: Router,
        private readonly location: Location
    ) { }

    navigateBack() {
        if (window.history.length) {
            this.location.back();
        } else {
            this.router.navigate([`/${RoutePaths.Admin}`]);
        }
    }
}

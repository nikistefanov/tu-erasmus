import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePaths } from '../../../../shared/constants/route-paths';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHomeComponent {
    adminLinks: IAdminLink[] = [{
        name: "Университети партньори",
        link: RoutePaths.Universities,
        icon: "school"
    }];

    constructor(private router: Router) {}

    onLinkClicked(link: string) {
        this.router.navigateByUrl(`admin/${link}`);
    }
}

interface IAdminLink {
    name: string;
    link: string;
    icon: string;
}

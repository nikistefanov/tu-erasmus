import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePaths } from '../../../../shared/constants/route-paths';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
    pageLinks: IAdminLink[] = [{
        name: "Начална страница",
        link: RoutePaths.HomePage,
        icon: "home"
    }];

    contentLinks: IAdminLink[] = [{
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

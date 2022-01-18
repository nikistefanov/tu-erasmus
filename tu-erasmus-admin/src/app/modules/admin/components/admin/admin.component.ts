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
    }, {
        name: "Еразъм+ страница",
        link: RoutePaths.ErasmusPage,
        icon: "post_add"
    }];

    contentLinks: IAdminLink[] = [{
        name: "Партньори",
        link: RoutePaths.Universities,
        icon: "school"
    }, {
        name: "Новини",
        link: RoutePaths.NewsItems,
        icon: "newspaper"
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

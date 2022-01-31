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
        name: "Начална",
        link: RoutePaths.HomePage,
        icon: "home"
    }, {
        name: "Еразъм+",
        link: RoutePaths.ErasmusPage,
        icon: "post_add"
    }, {
        name: "Проекти",
        link: RoutePaths.ProjectsPage,
        icon: "request_quote"
    }, {
        name: "Студентска мобилност с цел обучение",
        link: RoutePaths.MobilityStudentsStudyPage,
        icon: "school"
    }, {
        name: "Студентска мобилност с цел практика",
        link: RoutePaths.MobilityStudentsPracticePage,
        icon: "school"
    }];

    contentLinks: IAdminLink[] = [{
        name: "Партньори",
        link: RoutePaths.Universities,
        icon: "school"
    }, {
        name: "Новини",
        link: RoutePaths.NewsItems,
        icon: "newspaper"
    }, {
        name: "Документи",
        link: RoutePaths.Documents,
        icon: "description"
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

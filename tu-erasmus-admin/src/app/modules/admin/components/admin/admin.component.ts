import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePaths } from '../../../../shared/constants/route-paths';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
    panelOpenState = false;
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
        name: "Студентска мобилност",
        link: "",
        icon: "chevron_right",
        pages: [{
            name: "Студентска мобилност с цел обучение",
            link: RoutePaths.MobilityStudentsStudyPage,
            icon: "school"
        }, {
            name: "Студентска мобилност с цел практика",
            link: RoutePaths.MobilityStudentsPracticePage,
            icon: "school"
        }]
    }, {
        name: "Мобилност персонал",
        link: "",
        icon: "chevron_right",
        pages: [{
            name: "Преподавателска мобилност с цел преподаване",
            link: RoutePaths.MobilityAdministrationPracticePage,
            icon: "school"
        }, {
            name: "Преподавателски и непреподавателски състав с цел обучение",
            link: RoutePaths.MobilityAdministrationStudyPage,
            icon: "school"
        }]
    }, {
        name: "Кредитна мобилност",
        link: "",
        icon: "chevron_right",
        pages: [{
            name: "Обща информация",
            link: RoutePaths.CreditMobilityInfo,
            icon: "school"
        }, {
            name: "Кандидатстване",
            link: RoutePaths.CreditMobilityApplication,
            icon: "school"
        }, {
            name: "Партньори",
            link: RoutePaths.CreditMobilityPartners,
            icon: "school"
        }, {
            name: "Мобилност на персонала с цел обучение",
            link: RoutePaths.CreditMobilityStaffTraining,
            icon: "school"
        }, {
            name: "Студентска мобилност",
            link: RoutePaths.CreditMobilityStudentMobility,
            icon: "school"
        }, {
            name: "Преподавателска мобилност",
            link: RoutePaths.CreditMobilityTeachingMobility,
            icon: "school"
        }]
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

    constructor(private router: Router, private authService: AuthService) {
        if (this.authService.getUserInfo().user.role?.id === 1) {
            const adminsPage = {
                name: "Администратори",
                link: RoutePaths.Users,
                icon: "school"
            };

            this.contentLinks.unshift(adminsPage);
        }
    }

    onLinkClicked(link: string) {
        this.router.navigateByUrl(`admin/${link}`);
    }
}

interface IAdminLink {
    name: string;
    link: string;
    icon: string;
    pages?: IAdminLink[];
}

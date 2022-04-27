import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '../../shared/constants/route-paths';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUniversitiesComponent } from './components/admin-universities/admin-universities.component';
import { AdminNewsItemsComponent } from './components/admin-news-items/admin-news-items.component';
import { AdminDocumentsComponent } from './components/admin-documents/admin-documents.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { PageBaseComponent } from './components/pages/base-page/base-page.component';

export const adminRoutes: Routes = [
    {
        path: RoutePaths.Admin, canActivate: [AuthGuard],
        children: [
            { path: RoutePaths.Empty, component: AdminComponent },
            { path: RoutePaths.HomePage, component: PageBaseComponent, data: { route: RoutePaths.HomePage } },
            { path: RoutePaths.ErasmusPage, component: PageBaseComponent, data: { route: RoutePaths.ErasmusPage } },
            { path: RoutePaths.ProjectsPage, component: PageBaseComponent, data: { route: RoutePaths.ProjectsPage } },
            { path: RoutePaths.MobilityStudentsStudyPage, component: PageBaseComponent, data: { route: RoutePaths.MobilityStudentsStudyPage } },
            { path: RoutePaths.MobilityStudentsPracticePage, component: PageBaseComponent, data: { route: RoutePaths.MobilityStudentsPracticePage } },
            { path: RoutePaths.MobilityAdministrationStudyPage, component: PageBaseComponent, data: { route: RoutePaths.MobilityAdministrationStudyPage } },
            { path: RoutePaths.MobilityAdministrationPracticePage, component: PageBaseComponent, data: { route: RoutePaths.MobilityAdministrationPracticePage } },
            { path: RoutePaths.CreditMobilityInfo, component: PageBaseComponent, data: { route: RoutePaths.CreditMobilityInfo } },
            { path: RoutePaths.CreditMobilityApplication, component: PageBaseComponent, data: { route: RoutePaths.CreditMobilityApplication } },
            { path: RoutePaths.CreditMobilityPartners, component: PageBaseComponent, data: { route: RoutePaths.CreditMobilityPartners } },
            { path: RoutePaths.CreditMobilityStaffTraining, component: PageBaseComponent, data: { route: RoutePaths.CreditMobilityStaffTraining } },
            { path: RoutePaths.CreditMobilityStudentMobility, component: PageBaseComponent, data: { route: RoutePaths.CreditMobilityStudentMobility } },
            { path: RoutePaths.CreditMobilityTeachingMobility, component: PageBaseComponent, data: { route: RoutePaths.CreditMobilityTeachingMobility } },
            { path: RoutePaths.Universities, component: AdminUniversitiesComponent },
            { path: RoutePaths.Users, component: AdminUsersComponent },
            { path: RoutePaths.NewsItems, component: AdminNewsItemsComponent },
            { path: RoutePaths.Documents, component: AdminDocumentsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

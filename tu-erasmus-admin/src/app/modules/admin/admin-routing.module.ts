import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '../../shared/constants/route-paths';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUniversitiesComponent } from './components/admin-universities/admin-universities.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminNewsItemsComponent } from './components/admin-news-items/admin-news-items.component';
import { ErasmusPageComponent } from './components/erasmus-page/erasmus-page.component';
import { AdminDocumentsComponent } from './components/admin-documents/admin-documents.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

export const adminRoutes: Routes = [
    {
        path: RoutePaths.Admin, canActivate: [AuthGuard],
        children: [
            { path: RoutePaths.Empty, component: AdminComponent },
            { path: RoutePaths.HomePage, component: AdminHomeComponent },
            { path: RoutePaths.ErasmusPage, component: ErasmusPageComponent },
            { path: RoutePaths.ProjectsPage, component: ProjectsPageComponent },
            { path: RoutePaths.Universities, component: AdminUniversitiesComponent },
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

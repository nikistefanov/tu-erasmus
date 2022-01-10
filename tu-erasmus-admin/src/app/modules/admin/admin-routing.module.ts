import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from '../../shared/constants/route-paths';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUniversitiesComponent } from './components/admin-universities/admin-universities.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

export const adminRoutes: Routes = [
    {
        path: RoutePaths.Admin, canActivate: [AuthGuard],
        children: [
            { path: RoutePaths.Empty, component: AdminComponent },
            { path: RoutePaths.Universities, component: AdminUniversitiesComponent },
            { path: RoutePaths.HomePage, component: AdminHomeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

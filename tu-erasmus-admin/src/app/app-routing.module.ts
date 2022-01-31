import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { ChangePasswordComponent } from './modules/auth/components/change-password/change-password.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { LoginGuard } from './modules/auth/guards/login.guard';
import { RoutePaths } from './shared/constants/route-paths';

export const routes: Routes = [
    { path: RoutePaths.Empty, redirectTo: `/${RoutePaths.Login}`, pathMatch: "full" },
    { path: RoutePaths.Login, component: LoginComponent, canActivate: [LoginGuard] },
    { path: RoutePaths.ChangePassword, component: ChangePasswordComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

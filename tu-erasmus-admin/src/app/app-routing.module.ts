import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginGuard } from './modules/auth/guards/login.guard';
import { RoutePaths } from './shared/constants/route-paths';

export const routes: Routes = [
    { path: RoutePaths.Empty, redirectTo: `/${RoutePaths.Login}`, pathMatch: "full" },
    { path: RoutePaths.Login, component: LoginComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoutePaths } from './shared/constants/route-paths';

export const appRoutes: Routes = [
    { path: "", redirectTo: RoutePaths.Home, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

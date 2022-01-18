import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErasmusComponent } from './components/erasmus/erasmus.component';
import { HomeComponent } from './components/home/home.component';
import { NewsListComponent } from './components/news/news-lists.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartnersDetailsComponent } from './components/partners/details/partners-details.component';
import { PartnersListComponent } from './components/partners/list/partners-list.component';
import { RoutePaths } from './shared/constants/route-paths';

export const appRoutes: Routes = [
    { path: "", redirectTo: RoutePaths.Home, pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "erasmus", component: ErasmusComponent },
    { path: "partners", component: PartnersListComponent },
    { path: "partners/:id", component: PartnersDetailsComponent },
    { path: "news-items", component: NewsListComponent },
    { path: "news-items/:id", component: PartnersDetailsComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

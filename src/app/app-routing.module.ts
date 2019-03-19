import { HomeComponent } from "./features/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./features/login/login.component";
import { InfoComponent } from "./features/info/info.component";
import { InfoGuard } from "./guards/info.guard";
import { LoginGuard } from "./guards/login.guard";
import { HomeGuard } from './guards/home.guard';
import { LogOutGuard } from './guards/logout.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [HomeGuard],
    canDeactivate: [LogOutGuard]
  },
  {
    path: "info",
    component: InfoComponent,
    canActivate: [InfoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

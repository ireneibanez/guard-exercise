import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(private router:Router) {}

  redirect(url) {
    this.router.navigateByUrl(url);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(localStorage["token"]);
    if (localStorage["token"]) {
      // let url: string = state.url;
      // console.log(`Navegamos a ${url}`);
      return true;
    } else {
      this.redirect ('login');
      // let url: string = state.url;
      // console.log(`Navegamos a ${url}`);
      return false;
    }
  }
}

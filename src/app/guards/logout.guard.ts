import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { Router } from '@angular/router';


@Injectable()
export class LogOutGuard implements CanDeactivate<HomeComponent> {

  constructor(private router:Router) {}

  redirect(url) {
    this.router.navigateByUrl(url);
  }

  canDeactivate(component: HomeComponent){

    let confirm = window.confirm("Do you really want to leave?");
    if (confirm === true) {
      console.log ('Todo OK');
      return true;
    }else {
      console.log('mal');
      return false;
    }
  }


}

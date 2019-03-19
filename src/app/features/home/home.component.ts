import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  redirect(url) {
    return this.router.navigateByUrl(url);
  }

  logOut(){
    const promise = this.redirect('login');
    promise.then(response => {
      if (response === true){
        localStorage.clear();
      }
    });
  }

  ngOnInit() {
  }

}

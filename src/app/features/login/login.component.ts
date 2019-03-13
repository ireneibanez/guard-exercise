import { LoginService } from "./login.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  showError = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      user: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  submit() {
    if (this.authForm.valid) {
      this.loginService.login(this.authForm.value, "/login").subscribe(
        token => {
          this.showError = false;
          localStorage.token = token;
          this.router.navigateByUrl("home");
        },
        err => {
          this.showError = true;
        }
      );
    }
  }
}

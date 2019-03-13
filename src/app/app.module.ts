import { LoginService } from "./features/login/login.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./features/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HomeComponent } from "./features/home/home.component";
import { MatButtonModule } from "@angular/material/button";
import { InfoComponent } from './features/info/info.component';
import { InfoGuard } from './guards/info.guard';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, InfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [LoginService, InfoGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

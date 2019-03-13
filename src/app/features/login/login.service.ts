import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data, endpoint) {
    return this.http.post(`${environment.api_url}${endpoint}`, data);
  }
}

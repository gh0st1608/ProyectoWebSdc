import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { User } from "../models/user";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  Host = 'http://' + environment.HostBackend + ':3000';

  login(user: User){
    const path = this.Host + '/login';
    return this.http.post(path,user)
  }

  setToken(token : any) {
    this.cookies.set("token", token);
  }
/*
  getToken() {
    return this.cookies.get("token");
  }
*/
  getUser() {
    return this.http.get("http://localhost:3000/user/");
  }

  /*
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }

*/

}
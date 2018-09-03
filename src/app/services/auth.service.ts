import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = "http://localhost:9001/api/users/login";

  constructor(private _http: HttpClient, private _router: Router) { }

  login(userData: User) {
    return this._http.post(this.loginUrl, userData)
  }

  saveToken(token: string) {
    this.isAuthenticated.next(true);
    return localStorage.setItem("token", token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedin() {
    return !!localStorage.getItem("token");

  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(['/sign-in'])
  }

  isAuthenticated: Subject<boolean> = new Subject();

}

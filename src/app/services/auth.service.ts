import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = "http://localhost:9001/api/users/login";

  constructor(private _http: HttpClient, private _router: Router) { }

  login(userData: User) {
    return this._http.post(this.loginUrl, userData);
  }

  saveToken(token: string) {
    return sessionStorage.setItem("token", token)
  }

  getToken() {
    return sessionStorage.getItem('token')
  }

  isLoggedin() {
    return !!sessionStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(['/sign-in'])
  }

  isAuthenticated(): boolean {
    const GetToken = sessionStorage.getItem('token');
    if (GetToken && GetToken.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}

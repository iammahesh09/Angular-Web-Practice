import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  rsgUrl: string = "https://mobile-products.herokuapp.com/api/users/register";

  signup(userData: User) {
    return this._http.post(this.rsgUrl, userData)
  }

}

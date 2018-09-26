import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'
import { AuthService } from './auth.service';
import { ResponseInfo } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  rsgUrl: string = "http://localhost:9001/api/users/register/";

  signup(username, password) {
    console.log("Service " + username + "," + password)
    return this._http.post(this.rsgUrl, { username, password })
  }

}

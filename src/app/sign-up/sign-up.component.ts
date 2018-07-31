import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  _user: any = []
  pwdNotMatch: string;
  alertMsg: string;
  alertResult: boolean;
  alertPop: boolean = false;;

  constructor(private _signupService: SignupService, private _router: Router) { }

  ngOnInit() {
  }

  userReg() {
    // let password = this._user.password;
    // let repassword = this._user.repassword;
    // if (password == repassword) {

    console.log(this._user)

    this._signupService.signup(this._user).subscribe(
      res => {
        console.log(res);
        this._user = {};
        this.alertPop = true;
        this.alertResult = true;
        this.alertMsg = "Registration successful";
        this._router.navigate(['/sign-in']);
      },
      eror => {
        this.alertPop = false;
        this.alertResult = true;
        this.alertMsg = "Registration Not successful";
        console.log(eror);
      }
    )
    //}
    //     else {
    //   this.pwdNotMatch = "Password Not Match"
    // }

  }

}

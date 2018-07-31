import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	isLoggedin: boolean;

	constructor(private _authService: AuthService, private _router: Router) {
		this.isLoggedin = this._authService.isLoggedin();
	}

	ngOnInit() {
		this._authService.isAuthenticated.subscribe(res => this.isLoggedin = res)
	}

	logout() {
		this._authService.logout()
		this._router.navigate(['/sign-in']);
	}
	
	
  
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';

const appRouters:Routes = [
{ path: '', component: HomeComponent },
{ path: 'products-list', component: ProductsComponent },
{ path: 'sign-in', component: SigninComponent }
]

@NgModule({
	imports: [
	RouterModule.forRoot(appRouters)
	],
	exports: [RouterModule]
	
})

export class AppRoutingModule{

}

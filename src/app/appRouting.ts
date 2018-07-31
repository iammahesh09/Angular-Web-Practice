import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRouters:Routes = [
{ path: '', component: HomeComponent },
{ path: 'products-list', component: ProductsComponent },
{ path: 'sign-in', component: SignInComponent }
]

@NgModule({
	imports: [
	RouterModule.forRoot(appRouters)
	],
	exports: [RouterModule]
	
})

export class AppRoutingModule{

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth.guard'

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { BooklistComponent } from './books/booklist/booklist.component';

const childRoutes: Routes = [
	{ path: 'dashborad', component: HomeComponent },
	{ path: 'products-list', component: ProductsComponent },
	{ path: 'add-product', component: AddProductComponent },
	{ path: 'books', component: BooklistComponent }
]

const appRouters: Routes = [
	{ path: '', component: MenuComponent, canActivate: [AuthGuard], children: childRoutes },
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: '**', redirectTo: '/' }
]


@NgModule({
	imports: [
		RouterModule.forRoot(appRouters)
	],
	exports: [RouterModule]

})

export class AppRoutingModule {

}

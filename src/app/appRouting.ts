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
import { MovieslistComponent } from './movies/movieslist/movieslist.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MemberListComponent } from './DataTable/member-list/member-list.component';

const childRoutes: Routes = [
	{ path: 'dashborad', component: HomeComponent },
	{ path: 'products-list', component: ProductsComponent },
	{ path: 'add-product', component: AddProductComponent },
	{ path: 'books', component: BooklistComponent },
	{ path: 'movies', component: MovieslistComponent },
	{ path: 'movies/:imdbID', component: MovieDetailsComponent },
	{ path: 'member-list', component: MemberListComponent },
	{ path: 'forms', loadChildren: './Forms/forms.lazy.module#FormsLazyModule' }
]

const appRouters: Routes = [
	{ path: '', component: MenuComponent, canActivate: [AuthGuard], children: childRoutes },

	// Basic Lazy Module
	// { path: '', loadChildren: './lazy/lazy.module#LazyModule' },
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

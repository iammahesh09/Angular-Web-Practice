import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './appRouting';

import { DataTableModule } from "angular-6-datatable";
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
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
import { MembersComponent } from './DataTable/members/members.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { FormsComponent } from './Forms/forms.component';
import { BasicFormComponent } from './Forms/basic-form/basic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ProductsComponent,
    SignInComponent,
    PageNotFoundComponent,
    MenuComponent,
    SignUpComponent,
    AddProductComponent,
    BooklistComponent,
    MovieslistComponent,
    MovieDetailsComponent,
    MemberListComponent,
    MembersComponent,
    ReactiveFormsComponent,
    FormsComponent,
    BasicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SmartTableModule,
    HttpClientModule,
    DataTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

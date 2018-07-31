import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class productService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  getProductData() {
    var hder = { 'authorization': this._authService.getToken() };
    return this._http.get<Product[]>("https://mobile-products.herokuapp.com/api/products/", { headers: hder })
  }


}

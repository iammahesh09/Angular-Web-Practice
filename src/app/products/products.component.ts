import { Component, OnInit } from '@angular/core';

import { productService } from '../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private _productSrc: productService) { }

  ngOnInit() {
    this._productSrc.getProductData().subscribe(
      //res => console.log(res),
      res => this.products = res,
      error => console.log(error)
    )
  }

}

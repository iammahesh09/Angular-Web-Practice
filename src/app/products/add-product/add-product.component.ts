import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  _product: any = {};
  isSuccess: boolean;
  isError: boolean;
  constructor(private _productService: productService, private _router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    console.log(this._product);

    this._productService.saveProduct(this._product).subscribe(
      res => {
        console.log(res),
          this._product = {},
          this.isSuccess = true,
          this.isError = false
        this._router.navigate(['/products-list'])
      },
      err => {
        console.log(err),
          this._product = {},
          this.isError = true,
          this.isSuccess = false
      }

    )
  }

}

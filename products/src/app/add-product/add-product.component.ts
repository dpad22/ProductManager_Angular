import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  products = [];
  addProduct: any;
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getProductsFromService();
    this.addProduct = { title: "", price: 0, url: ""};
  }
  getProductsFromService(){
    let observable = this._httpService.getAllProducts();
    observable.subscribe((data) => {
      this.products = data["data"];
    });
  }

  onSubmit(){
    let observable = this._httpService.newProduct(this.addProduct);
    observable.subscribe((data) => {
      this.getProductsFromService();
      console.log("test")
      this._router.navigate(["products"]);
    });
  }

}

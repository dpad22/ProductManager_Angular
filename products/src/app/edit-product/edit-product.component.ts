import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  _id = "";
  productData: any;
  editProduct: any;
  error = "";
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get("id");
    this.getOneProduct();
    this.editProduct = { title: "", price: null, url: "" };

  }
  getOneProduct() {
    let observable = this._httpService.getProduct(this._id);
    observable.subscribe((data) => {
      this.productData = data;
      console.log(data)
      console.log("getOneProduct above")
    });
  }

  onEdit() {
    console.log(this._id)
    console.log(this.editProduct)
    console.log("***********")
    let observable = this._httpService.editProduct(this._id, this.editProduct);
    observable.subscribe((data) => {
      this.getOneProduct();
      this._router.navigate(["products"]);
    });
  }
  onDelete(_id) {
    const observable = this._httpService.deleteProduct(_id);
    observable.subscribe((data) => {
      this._router.navigate(["products"]);
    });
  }

}

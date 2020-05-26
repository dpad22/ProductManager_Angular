import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  products: any = [];

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService() {
    let observable = this._httpService.getAllProducts();
    observable.subscribe((data) => {
      this.products = data;
    });
  }
  onDelete(_id) {
    const observable = this._httpService.deleteProduct(_id);
    observable.subscribe((data) => {
      this.router.navigate([""]);
    });
  }

}

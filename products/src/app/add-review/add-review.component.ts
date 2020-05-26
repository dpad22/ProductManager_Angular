import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  product = "";
  productId: string;
  productData: any;
  addReview: any;
  customer: string;
  stars: Number;
  comment: string;
  reviews = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.addReview = { customer: "", stars: 1, comment: "" }
    this.getOneProduct();
  }
  getOneProduct() {
    let observable = this._httpService.getProduct(this.productId);
    observable.subscribe((data) => {
      this.productData = data;
    });
  }

  submitReview() {
    let observable = this._httpService.newReview(this.productId, this.addReview);
    observable.subscribe((data) => {
      this.productData = data;
      console.log(this.productData)
      this.getOneProduct();
      this.router.navigate([`products/${this.productId}`]);

    });
  }

}

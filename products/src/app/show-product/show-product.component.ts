import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {
  productId:String;
  id:any;
  productData: any;
  reviewData: any = {};
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private httpService: HttpService
    ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
    this.getOneProduct();
  }
  getOneProduct(){
    let observable = this.httpService.getProduct(this.productId);
    observable.subscribe((data)=> {
      this.productData = data;
      console.log(this.productData)
    })
  }
  deleteReview(id, reviewId){
    const observable = this.httpService.deleteReview(id, reviewId);
    observable.subscribe((data)=> {
      this.router.navigate(["products"]);
    });
  }
}

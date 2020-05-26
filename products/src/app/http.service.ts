import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get("/showAll");
  }

  newProduct(addProduct){
    return this._http.post("/add",addProduct);
  }
  newReview(id, addReview){
    return this._http.post(`/review/${id}`, addReview);
  }
  getReviews(id){
    return this._http.get("/reviews/" + id);
  }

  deleteProduct(_id){
    return this._http.delete(`/destroy/${_id}`);
  }

  deleteReview(id: any,reviewId: any){
    return this._http.delete(`/destroy/${id}/${reviewId}/delete`,{});
  }
  
  editProduct(id, editProduct){
    return this._http.put(`/edit/${id}`,editProduct);
  }

  getProduct(id){
    return this._http.get(`/showAll/${id}`);
  }

}


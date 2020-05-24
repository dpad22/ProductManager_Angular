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

  deleteProduct(id){
    return this._http.delete(`/destroy/${id}`);
  }

  editProduct(id, editProduct){
    return this._http.put(`/edit/${id}`,editProduct);
  }

  getProduct(id){
    return this._http.get(`/showOne/${id}`);
  }

}


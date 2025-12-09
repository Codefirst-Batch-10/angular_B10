import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private _imgUrl:HttpClient) { }

  getProductList(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getImage(){
    const url="https://dummyjson.com/products";
    return this._imgUrl.get(url)
  }
}

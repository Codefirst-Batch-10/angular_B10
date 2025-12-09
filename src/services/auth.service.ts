import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  getUserList() {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }

  addition(a: number, b: number) {
    return a + b;
  }

  getProductData() {
    return [
      { name: 'mobile', brand: 'onePlus', price: '15000' },
      { name: 'laptop', brand: 'Dell', price: '50000' },
      { name: 'refrigerator', brand: 'LG', price: '20000' },
      { name: 'washing machine', brand: 'LG', price: '10000' }
    ]
  }

}

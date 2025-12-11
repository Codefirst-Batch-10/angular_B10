import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient ) {}

  getUserList() {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }

  addition(a:number, b: number) {
    return a+b;
  }


}

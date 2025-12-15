import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient ) {}

  getUserList():Observable<any> {
    return this._http.get("https://jsonplaceholder.typicode.com/users");
  }

  addition(a:number, b: number) {
    return a+b;
  }


}

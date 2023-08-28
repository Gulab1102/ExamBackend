import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl="http://localhost:8080";

  constructor(private _httpclient: HttpClient) { }
public addUser(user:any){
  return this._httpclient.post(this.baseUrl+'/user/',user)

}

}

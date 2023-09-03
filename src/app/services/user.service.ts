import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  baseUrl= environment.baseUrl;
  //baseUrl='https://exam-project-production.up.railway.app'

  constructor(private _httpclient: HttpClient) { }
public addUser(user:any){
  return this._httpclient.post(this.baseUrl+'/user/',user)

}

}

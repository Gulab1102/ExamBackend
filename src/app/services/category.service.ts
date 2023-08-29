import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // baseUrl="http://localhost:8080";
  baseUrl='https://exam-project-production.up.railway.app'

  constructor(private _httpclient: HttpClient) { }

  public categories(){
   return this._httpclient.get(this.baseUrl+'/category/');
  }
  public addCategory(category:any){
    return this._httpclient.post(this.baseUrl+'/category/',category);
   }

}

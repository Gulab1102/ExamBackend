import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl= environment.baseUrl;
  // baseUrl='https://exam-project-production.up.railway.app'

  constructor(private _httpclient: HttpClient) { }

  public categories(){
   return this._httpclient.get(this.baseUrl+'/category/');
  }
  public addCategory(category:any){
    return this._httpclient.post(this.baseUrl+'/category/',category);
   }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  user:any={gkp:"gk"};

 baseUrl="http://localhost:8080";

  constructor(private _httpclient: HttpClient) { }

  public getCurrentUser(){
    return this._httpclient.get(this.baseUrl+'/current-user');
  }

  public generatetoken(loginData:any){
    return this._httpclient.post(this.baseUrl+'/generate-token',loginData);
  
  }

public loginUser(token:any){
  localStorage.setItem('token',token);
  return true;
}

public isLoggedIn(){
  let token=localStorage.getItem("token");
  if(token==undefined||token==''||token==null)
  return false;
else
   return true;
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
 // localStorage.removeItem('user');
 this.user={};
  return true;
}

getToken(){
  return localStorage.getItem('token');
}

public setUser(user:any){
  // localStorage.setItem('user',JSON.stringify({user}));
  if(user!=null){
   // let str=user.authorities[0].authority;
    localStorage.setItem('userRole',user.authorities[0].authority);
  //  return str;
  }
 

  this.user=user;
}

getUser(){
  return this.user;
}

public getUserRole(){
 
  return   localStorage.getItem('userRole');;
}

}

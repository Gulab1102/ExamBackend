import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  currentuser='';
  loggedin=false;

  user:any;
  constructor(public loginservice: LoginService,private router: Router){

  }

  ngOnInit(): void {
    this.loggedin=this.loginservice.isLoggedIn();

    this.loginservice.getCurrentUser().subscribe(
      (user:any)=>{
         this.currentuser=user.userName;
         this.user=user;
       

      },(error)=>{
       // console.log("error");
       
      }
     );
     this.loginservice.loginStatusSubject.asObservable().subscribe((data)=>{
      this.loggedin=this.loginservice.isLoggedIn();

      this.loginservice.getCurrentUser().subscribe(
        (user:any)=>{
          console.log(user);
          
           this.currentuser=user.userName;
           this.user=user;
           
         
  
        },(error)=>{
         // console.log("error");
         
        }
       );
     });
    
  }
  logout(){
    this.loginservice.logout()
  //  window.location.reload();
  this.loginservice.loginStatusSubject.next(false);
  this.router.navigate(['login']);

  }
  Submit(){
    if(this.user.authorities[0].authority=='NORMAL')
    this.router.navigate(['user-dashboard/normal/profile'])
  else if(this.user.authorities[0].authority==='ADMIN') this.router.navigate(['admin/profile'])
  }

}

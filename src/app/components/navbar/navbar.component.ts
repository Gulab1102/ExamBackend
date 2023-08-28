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
  constructor(public loginservice: LoginService,private router: Router){

  }

  ngOnInit(): void {
    this.loggedin=this.loginservice.isLoggedIn();

    this.loginservice.getCurrentUser().subscribe(
      (user:any)=>{
         this.currentuser=user.userName;
         
       

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
}

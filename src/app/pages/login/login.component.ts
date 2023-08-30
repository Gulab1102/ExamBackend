import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginData={
    userName: '',
    password: ''
  };

  constructor(private _snake :MatSnackBar,private loginservice: LoginService,private router: Router){

  }

  ngOnInit(): void {
    
  }
  formSubmit(){
    if(this.loginData.userName== ''|| this.loginData.userName==null){
      this._snake.open("Username is Required",'',
       {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
     //  Swal.fire('Error','Username is Required','error');
       return;
    }
    if(this.loginData.password== ''|| this.loginData.password==null){
      this._snake.open("Password is Required",'',
       {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
     //  Swal.fire('Error','Username is Required','error');
       return;
    }
    this.loginservice.generatetoken(this.loginData).subscribe(
      (data:any)=>{
         console.log(data);
         this.loginservice.loginUser(data.token);
         this.loginservice.getCurrentUser().subscribe(
          (user:any)=>{
              this.loginservice.setUser(user);
              console.log(this.loginservice.getUserRole());
             
              if(this.loginservice.getUserRole()=='ADMIN'){
               // window.location.href='/admin'
               this.loginservice.loginStatusSubject.next(true);
               this.router.navigate(['admin'])
              }
              else if(this.loginservice.getUserRole()=='NORMAL'){
               //  window.location.href='/user-dashboard'
                this.router.navigate(['user-dashboard/0']);
               this.loginservice.loginStatusSubject.next(true);
              }
              else {
                this.loginservice.logout();
                this.loginservice.loginStatusSubject.next(false);
                this.router.navigate(['login']);
              }

          },(error)=>{
           // console.log("error");
           
          }
         );
      },(error)=>{
        console.log(error);
        this._snake.open("Something Went Wrong Try again !! ",'',
        {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
      }
      
    );
    console.log(this.loginData);
  }
}

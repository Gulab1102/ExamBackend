import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user:any='';


  constructor(public loginservice: LoginService,private router: Router){

  }
  ngOnInit(): void {
      this.loginservice.getCurrentUser().subscribe(
          (user:any)=>{
              this.user=user;

          },(error)=>{
           // console.log("error");
           
          }
         );
  }

}

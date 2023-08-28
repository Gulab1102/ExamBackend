import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user={
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }

  constructor(private _userservice:UserService, private _snake :MatSnackBar){

  }

  ngOnInit(): void {
    
  }

  formSubmit(){
    if(this.user.userName== ''|| this.user.userName==null){
      //alert('UserName is Required !!');
      this._snake.open("Username is Required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
    //  Swal.fire('Error','Username is Required','error');
      return;
    }
    //add user
    this._userservice.addUser(this.user).subscribe(
     ( data:any)=>{
         console.log(data);
         //alert('success');
         if(data!=null)
         Swal.fire('Successfully done','User id is '+data.id,'success');
        else  this._snake.open("User is Already Registerd !!",'',
        {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
      },
      (error)=>{
        console.log(error);
       // alert('something went wrong');
       this._snake.open("Something Went Wrong",'',
       {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
      }
    )


    
  }

}

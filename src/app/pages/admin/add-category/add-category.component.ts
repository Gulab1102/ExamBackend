import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  category={
    title:'',
    desciption:''
  };

  constructor(public loginservice: LoginService,private router: Router,private _category:CategoryService,
    private _snake :MatSnackBar){

  }
  ngOnInit(): void {
    
  }

  Submit(){
    if(this.category.title== ''|| this.category.title==null){
      this._snake.open("Title is Required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
    //  Swal.fire('Error','Username is Required','error');
      return;
    }

    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        this.category.desciption='';
        this.category.title='';
         Swal.fire('Success','Category Added Successfully','success');
      },
      (error)=>{
        this._snake.open("Something Went Wrong!",'',
        {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
      }
    )
  }

}

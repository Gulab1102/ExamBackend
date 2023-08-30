import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit{

  category:any;

  constructor(private router: Router,private _category:CategoryService,
    private _snake :MatSnackBar){

  }

  ngOnInit(): void {

    this._category.categories().subscribe(
      (data:any)=>{
           this.category=data;
      },(error)=>{
        this._snake.open("Something Went Wrong!",'',
        {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
      }
    )
    
  }

}

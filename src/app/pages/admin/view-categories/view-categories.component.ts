import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

   categories=[
    {
      cid:23,
      title:"Angular ",
      desciption :"This is Angular Test"
  },
  {
    cid:24,
    title:"Angular 2 ",
    desciption :"This is Angular For beginer"
},
{
  cid:25,
  title:"Angular ",
  desciption :"This is Angular Test"
}
]
  constructor(public loginservice: LoginService,private router: Router,private _category:CategoryService){

  }
  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }


}

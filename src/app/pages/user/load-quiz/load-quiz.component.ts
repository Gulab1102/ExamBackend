import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit{

  catId:any;
  quizes:any

  constructor(private _route: ActivatedRoute,private _category:CategoryService,private _quiz:
     QuizServiceService,private _snake :MatSnackBar){

  }

  ngOnInit(): void {
   this.catId=this._route.snapshot.params['catId'];
   if(this.catId==0){
    //load all the quiz

  this._quiz.quizes().subscribe(
    (data:any)=>{
      this.quizes=data;
    }
    ,(error)=>{
      this._snake.open("Something Went Wrong!",'',
        {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
    }
  )

   }
   else{
    //load the quiz with category
   }
    
  }

}

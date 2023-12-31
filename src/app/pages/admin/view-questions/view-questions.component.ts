import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit{

  qId:any;
  qTitle:any;
  

  questions:any;

  constructor(private _route:ActivatedRoute,
    private _snake :MatSnackBar, private _question: QuestionService,private _router:Router){

  }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['id']
    this.qTitle=this._route.snapshot.params['title']
    // alert(this.qId);
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
     this.questions=data;
     console.log(this.questions)
      },(error)=>{

      }
    );

  }

}

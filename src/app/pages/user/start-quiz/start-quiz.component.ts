import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit{
  isSubmited=false;
  marksGot=0;
  attempted=0;
  correctAnswer=0;
  qId:any;
  questions:any

  constructor(private _route: ActivatedRoute,private _quest:QuestionService,private _quiz:
     QuizServiceService,private _snake :MatSnackBar,private locationst:LocationStrategy){

  }
  ngOnInit(): void {
   // this.preventBack();

this.qId=this._route.snapshot.params['qId'];
//console.log(this.qId)
   this._quest.getQuestionsOfQuizforTest(this.qId).subscribe(
    (data:any)=>{
      this.questions=data;
      this.questions.forEach((q:any) => {
        q['givenanswer']='';
      });
     // console.log(this.questions);
    },(error)=>{
      

      console.log(error);
      this._snake.open("Something Went Wrong Try again !! ",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
    

    }
   )
    
  }

  preventBack(){
    history.pushState(null,'',location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,'',location.href);
    });
  }

  submitQuiz(){

    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      showCancelButton: true,
      confirmButtonText: 'Submit'
    }).then((result) => {
      this.isSubmited=true;
       this.attempted=0;
       this.marksGot=0;
       this.correctAnswer=0;
      this.questions.forEach((q:any)=>{
        if(q.givenanswer==q.answer){

          this.correctAnswer++;

         this.marksGot+= this.questions[0].quiz.maxMarks/this.questions.length;
         
        }
        if(q.givenanswer.trim()!=''){

          this.attempted++;

        // this.marksGot+= this.questions[0].quiz.maxMarks/this.questions.length;
         
        }
        console.log(this.attempted);
      })
     
    })

  }

}

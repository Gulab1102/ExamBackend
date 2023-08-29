import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit{

qId:any;
qTitle:any

question={
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
  quiz:{
    qId:''
  }
};

  constructor(private _route:ActivatedRoute,
    private _snake :MatSnackBar, private _question: QuestionService,private _router:Router){

  }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this.question.quiz.qId=this.qId;
    //alert(this.qId)
  }

  Submit(){
    if(this.question.content==''|| this.question.content==null){
      this._snake.open("content is Required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'right'});

      return;
    }

    this._question.addQuestionOfQuiz(this.question).subscribe(
     (data:any)=>{
            
      Swal.fire('Success','Quiz Added','success');
      this.question={
        content:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        answer:'',
        quiz:{
          qId:''
        }
      };

     },(error)=>{

     }
    )
  }

}

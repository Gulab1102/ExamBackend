import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{

  categories:any;

  qId=0;

  quizData:any;

  constructor(private _route:ActivatedRoute, private _category:CategoryService,
    private _snake :MatSnackBar, private _quizservice: QuizServiceService,private _router:Router){

  }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qId'];

    this._quizservice.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quizData=data;
        console.log(data);
      },(error)=>{

      }
    )
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        // console.log(data)
      },
      (error)=>{

      }
    )
    // alert(this.qId);
  }

  Submit(){
    if(this.quizData.title==''|| this.quizData.title==null){
      this._snake.open("Title is Required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'right'});

      return;
    }
 this._quizservice.upDate(this.quizData).subscribe(
  (data:any)=>{

    Swal.fire('Success','Quiz Updated','success').then((e)=>{
      this._router.navigate(['/admin/quizes'])
    });
    this.quizData={
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestion:'',
      active:true,
      category:{}
    };
  },(error)=>{
    Swal.fire('Error !!','Something Went Wrong','error');
  }
 );

  }

}

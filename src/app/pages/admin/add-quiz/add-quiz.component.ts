import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent  implements OnInit{

  categories=[
    {
      cid:23,
      title:'Programming'
    },
    {
      cid:23,
      title:'Programming'
    }
  ]

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:true,
    category:{}
  };


  constructor(private _category:CategoryService,
    private _snake :MatSnackBar, private _quizserive: QuizServiceService){

  }
  ngOnInit(): void {
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        // console.log(data)
      },
      (error)=>{

      }
    )
  }

  Submit(){

    if(this.quizData.title==''|| this.quizData.title==null){
      this._snake.open("Title is Required",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'right'});

      return;
    }
 this._quizserive.addQuiz(this.quizData).subscribe(
  (data:any)=>{

    Swal.fire('Success','Quiz Added','success');
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

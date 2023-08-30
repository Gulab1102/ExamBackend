import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructios',
  templateUrl: './instructios.component.html',
  styleUrls: ['./instructios.component.css']
})
export class InstructiosComponent implements OnInit{

  qId:any;
  quiz={
    title:'',
    description:'',
    maxMarks:4,
    numberOfQuestion:4
  }

  constructor(private _route: ActivatedRoute,private _category:CategoryService,private _quiz:
     QuizServiceService,private _snake :MatSnackBar,private router:Router){

  }
  ngOnInit(): void {
this.qId=this._route.snapshot.params['qId'];
   this._quiz.getQuiz(this.qId).subscribe(
    (data:any)=>{
      this.quiz=data;
    },(error)=>{
      

      console.log(error);
      this._snake.open("Something Went Wrong Try again !! ",'',
      {duration:3000,verticalPosition:'top',horizontalPosition:'right'});
      // routerLink="/start/{{quiz.qId}}"

    }
   )
    
  }

  startQuiz(){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      showCancelButton: true,
      confirmButtonText: 'Start'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.quiz={
          title:'',
          description:'',
          maxMarks:4,
          numberOfQuestion:4
        }
       this.router.navigate(['/start/'+this.qId]);
        
      } 
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit{

  quizes:any;

  constructor(private _snake :MatSnackBar,private _quizservice:QuizServiceService){

  }

  ngOnInit(): void {
    this._quizservice.quizes().subscribe(
     (data:any)=>{
      this.quizes=data;
      console.log(data);
     },
     (error)=>{
       Swal.fire('Error !','Error in loading data','error');
     }
    );
  }


  delete(qId:any){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
   
        this._quizservice.deleteQuiz(qId).subscribe(
          (data:any)=>{
           Swal.fire('Deleted!','Deleted Succussfully','success');
          this.quizes= this.quizes.filter((quiz:any)=>quiz.qId!=qId)
          },
          (error)=>{
       
           Swal.fire('Error !!','Error In Deleting','error');
          }
         );
      } 
    })

  }

}

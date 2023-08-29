import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  // baseUrl="http://localhost:8080";
  baseUrl='https://exam-project-production.up.railway.app'

  constructor(private _httpclient: HttpClient) { }

  public quizes(){
   return this._httpclient.get(this.baseUrl+'/quiz/');
  }
 
  public addQuiz(quiz:any){
    return this._httpclient.post(this.baseUrl+'/quiz/',quiz);
  }

  public deleteQuiz(qId:any){
    return this._httpclient.delete(this.baseUrl+'/quiz/'+qId);
  }

  public getQuiz(qId:any){
    return this._httpclient.get(this.baseUrl+'/quiz/'+qId);
  }
  public upDate(quiz:any){
    return this._httpclient.put(this.baseUrl+'/quiz/',quiz);
  }
}

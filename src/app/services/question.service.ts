import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl= environment.baseUrl;

  // baseUrl='https://exam-project-production.up.railway.app'

  constructor(private _httpclient: HttpClient) { }

  public getQuestionsOfQuiz(qId:any){
    return this._httpclient.get(this.baseUrl+'/question/quiz/all/'+qId);
  }

  public addQuestionOfQuiz(question:any){
    return this._httpclient.post(this.baseUrl+'/question/',question);
  }

  public getQuestionsOfQuizforTest(qId:any){
    return this._httpclient.get(this.baseUrl+'/question/quiz/'+qId);
  }
}

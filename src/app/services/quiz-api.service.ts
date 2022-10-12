import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/Question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  private randomQuestionUrl : string = environment.randomQuestionUrl;

  constructor(private httpClient: HttpClient) { }

  getRandomQuestion() : Observable<Question> {
    return this.httpClient.get<Question>(this.randomQuestionUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { Question } from '../model/Question';
import { QuizApiService } from '../services/quiz-api.service';

@Component({
  selector: 'app-random-question',
  templateUrl: './random-question.component.html',
  styleUrls: ['./random-question.component.css']
})
export class RandomQuestionComponent implements OnInit {

  public question : any;
  public error : string | undefined;

  constructor(private quizApiService : QuizApiService) { }

  ngOnInit(): void {
    this.quizApiService.getRandomQuestion().subscribe({
      next: (question) => { this.question = question }
    });
  }

}

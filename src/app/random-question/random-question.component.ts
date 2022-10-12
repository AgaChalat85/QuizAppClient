import { Component, OnInit } from '@angular/core';
import { QuizApiService } from '../services/quiz-api.service';

@Component({
  selector: 'app-random-question',
  templateUrl: './random-question.component.html',
  styleUrls: ['./random-question.component.css']
})
export class RandomQuestionComponent implements OnInit {

  constructor(private quizApiQuestion : QuizApiService) { }

  ngOnInit(): void {
  }

}

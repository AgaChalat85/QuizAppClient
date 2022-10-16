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
  public selected : number;
  public showCorrectMessage : boolean = false;
  public showWrongMessage : boolean = false;
  public showNoAnswerMessage : boolean = false;

  constructor(private quizApiService : QuizApiService) { }

  ngOnInit(): void {
    this.quizApiService.getRandomQuestion().subscribe({
      next: (question) => { this.question = question }
    });
  }

  onAnswerChange(event : any) {
    this.selected = event.target.value;
  }

  evaluateAnswer() {
    if(this.selected == null) {
      this.showNoAnswerMessage = true;
    }

    if(this.question.answers[this.selected - 1].correct) {
      this.showCorrectMessage = true;
      this.showNoAnswerMessage = false;
    } else {
      this.showWrongMessage = true;
      this.showNoAnswerMessage = false;
    }
  }
}

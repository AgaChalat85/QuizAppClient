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
  public showNextQuestionButton : boolean = false;
  public correctAnswers : number = 0;
  public allQuestions : number = 0;
  public percentageOfCorrectAnswers : number = 0;

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
      this.correctAnswers++;
    } else {
      this.showWrongMessage = true;
      this.showNoAnswerMessage = false;
    }
    this.showNextQuestionButton = true;
    this.allQuestions++;
    this.percentageOfCorrectAnswers = Math.round((this.correctAnswers / this.allQuestions) * 100);
  }

  nextQuestion() {
    this.quizApiService.getRandomQuestion().subscribe({
      next: (question) => { this.question = question }
    });
    this.showCorrectMessage = false;
    this.showWrongMessage = false;
    this.showNoAnswerMessage = false;
    this.showNextQuestionButton = false;
  }
}

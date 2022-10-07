export class Answer {

    public id: number;
    public answer: string;
    public correct: boolean;
    public selected: boolean;

    constructor(id: number, answer: string, correct: boolean, selected: boolean) {
        this.id = id;
        this.answer = answer;
        this.correct = correct;
        this.selected = selected;
    }
}
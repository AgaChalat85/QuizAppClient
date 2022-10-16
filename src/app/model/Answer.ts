export class Answer {

    public id: number;
    public answer: string;
    public correct: boolean;
    public serial: number;

    constructor(id: number, answer: string, correct: boolean, serial: number) {
        this.id = id;
        this.answer = answer;
        this.correct = correct;
        this.serial = serial;
    }
}
import { Answer } from "./Answer";
import { Tag } from "./Tag";

export class Question {

    public id: number;
    public qstId: number;
    public question: string;
    public description: string;
    public answers: Answer[];
    public multipleAnswers: boolean;
    public explanation: string;
    public tip: string;
    public tags: Tag[];
    public category: string;
    public difficulty: string;

    constructor(id: number, qstId: number, question: string, description: string, answers: Answer[], multipleAnswers: boolean, explanation: string, tip: string, tags: Tag[], category: string, difficulty: string) {
        this.id = id;
        this.qstId = qstId;
        this.question = question;
        this.description = description;
        this.answers = answers;
        this.multipleAnswers = multipleAnswers;
        this.explanation = explanation;
        this.tip = tip;
        this.tags = tags;
        this.category = category;
        this.difficulty = difficulty;
    }
}
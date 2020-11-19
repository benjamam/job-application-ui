export interface AcceptedApplication {
    name: string;
    questions: Question[];
}

export interface Question {
    id: string;
    question: string;
    answer: string;
}
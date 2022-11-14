export interface Answer {
  text: string;
  isTrue: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
  prize: number;
}

export interface QuestionsSchema {
  questions: Question[];
  gameIsWon: boolean;
  currentQuestionIndex: null | number;
  error: null | string;
}
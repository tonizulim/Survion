import type { QuestionOption } from "./QuestionOption";

export type Answer = {
  id?: number;
  text: string;
  questionId: number;
  answerOptions: QuestionOption[];
};

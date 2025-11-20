import type { AnswerOption } from "./AnswerOption";

export type Answer = {
  id?: number;
  text: string;
  questionId: number;
  answerOptions: AnswerOption[];
  required: boolean;
  requireOptions: boolean;
  errors: string;
};

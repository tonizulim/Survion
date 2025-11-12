import type { QuestionOption } from "./QuestionOption";

export type Question = {
  text: string;
  questionPosition: number;
  isRequired: boolean;
  questionTypeId: number;
  QuestionOptions: QuestionOption[];
  minRating?: number;
  maxRating?: number;
};

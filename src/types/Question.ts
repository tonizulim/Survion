import type { QuestionOption } from "./QuestionOption";

export type Question = {
  text: string;
  questionPosition: number;
  isRequired: boolean;
  questionTypeId: number;
  options: QuestionOption[];
  minRating?: number;
  maxRating?: number;
};

import type { QuestionOption } from "./QuestionOption";

export type Question = {
  id?: number;
  text: string;
  questionPosition: number;
  isRequired: boolean;
  questionTypeId: number;
  minRating?: number;
  maxRating?: number;
  errors: string;
  questionOptions: QuestionOption[];
};

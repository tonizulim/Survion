import type { QuestionOption } from ".";

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
  answers?: string[];
  rating?: number;
  responses?: number;
};

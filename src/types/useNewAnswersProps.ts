import type { QuestionOption } from "./QuestionOption";

export interface EditTextAnswerProps {
  text: string;
  questionPosition: number;
}

export interface EditRatingAnswerProps {
  rating: number;
  questionPosition: number;
}

export interface EditCheckboxAnswerProps {
  questionOption: QuestionOption;
  questionPosition: number;
}

export interface editMultipleChoiceAnswerProps {
  questionOption: QuestionOption;
  questionPosition: number;
}

export interface EditRankingAnswerProps {
  rank: number;
  questionOption: QuestionOption;
  questionPosition: number;
}

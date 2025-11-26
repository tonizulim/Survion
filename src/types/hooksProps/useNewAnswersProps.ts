import type { ErrorObject, QuestionOption } from "..";

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

export interface EditMultipleChoiceAnswerProps {
  questionOption: QuestionOption;
  questionPosition: number;
}

export interface EditRankingAnswerProps {
  rank: number;
  questionOption: QuestionOption;
  questionPosition: number;
}

export interface SetAnswerErrorsProps {
  answerValidationError: ErrorObject;
}

export interface SubmitAnswersProps {
  surveyId: number;
}

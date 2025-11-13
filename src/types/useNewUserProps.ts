import type { Question } from "./Question";
import type { ErrorObject } from "./ErrorObject";

export interface editQuestionTypeProps {
  position: number;
  newType: number;
}

export interface editQuestionProps {
  position: number;
  question: Question;
}

export interface deleteQuestionProps {
  position: number;
}

export interface addQuestionOptionsProps {
  option: string;
  questionPosition: number;
}

export interface editQuestionOptionsProps {
  option: string;
  optionId: number;
  questionPosition: number;
}

export interface deleteQuestionOptionProps {
  optionId: number;
  questionPosition: number;
}

export interface editQuestionRatingProps {
  questionPosition: number;
  minValue: number;
  maxValue: number;
}

export interface setErrorsProps {
  surveyValidationError: ErrorObject;
}

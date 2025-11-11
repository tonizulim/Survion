import type { Question } from "./Question";

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
  optionId: string;
  questionPosition: number;
}

export interface deleteQuestionOptionProps {
  optionId: string;
  questionPosition: number;
}

export interface editQuestionRatingProps {
  questionPosition: number;
  minValue: number;
  maxValue: number;
}

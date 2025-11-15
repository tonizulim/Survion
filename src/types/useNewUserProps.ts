import type { Question } from "./Question";
import type { ErrorObject } from "./ErrorObject";
import type { Dispatch, FormEvent, SetStateAction } from "react";

export interface EditQuestionTypeProps {
  position: number;
  newType: number;
}

export interface EditQuestionProps {
  position: number;
  question: Question;
}

export interface DeleteQuestionProps {
  position: number;
}

export interface AddQuestionOptionsProps {
  option: string;
  questionPosition: number;
}

export interface EditQuestionOptionsProps {
  option: string;
  optionId: number;
  questionPosition: number;
}

export interface DeleteQuestionOptionProps {
  optionId: number;
  questionPosition: number;
}

export interface EditQuestionRatingProps {
  questionPosition: number;
  minValue: number;
  maxValue: number;
}

export interface SetErrorsProps {
  surveyValidationError: ErrorObject;
}

export interface SubmitSurveyProps {
  e: FormEvent<HTMLFormElement>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

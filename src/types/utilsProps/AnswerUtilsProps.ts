import type { Dispatch, SetStateAction } from "react";
import type { Answer, SetAnswerErrorsProps } from "..";

export interface HandleSubmitAnswersProps {
  answers: Answer[];
  surveyId: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setErrors: ({ answerValidationError }: SetAnswerErrorsProps) => void;
}

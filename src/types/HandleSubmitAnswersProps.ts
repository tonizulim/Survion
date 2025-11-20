import type { Dispatch, SetStateAction } from "react";
import type { Answer } from "./Answer";
import type { SetErrorsProps } from "./useNewAnswersProps";

export interface HandleSubmitAnswersProps {
  answers: Answer[];
  surveyId: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setErrors: ({ answerValidationError }: SetErrorsProps) => void;
}

import type { Dispatch, SetStateAction } from "react";
import type { Answer } from "./Answer";

export interface HandleSubmitAnswersProps {
  answers: Answer[];
  setLoading: Dispatch<SetStateAction<boolean>>;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  //setErrors: ({ surveyValidationError }: setErrorsProps) => void;
}

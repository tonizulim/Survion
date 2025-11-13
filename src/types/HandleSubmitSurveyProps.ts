import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { Survey } from "./Survey";
import type { setErrorsProps } from "./useNewUserProps";

export interface HandleSubmitSurveyProps {
  e: FormEvent<HTMLFormElement>;
  survey: Survey;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setErrors: ({ surveyValidationError }: setErrorsProps) => void;
}

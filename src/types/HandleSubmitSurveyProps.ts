import type { Dispatch, SetStateAction } from "react";
import type { Survey } from "./Survey";
import type { SetErrorsProps } from "./useNewUserProps";

export interface HandleSubmitSurveyProps {
  survey: Survey;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setErrors: ({ surveyValidationError }: SetErrorsProps) => void;
}

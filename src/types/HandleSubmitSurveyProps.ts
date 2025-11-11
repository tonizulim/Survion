import type { Dispatch, FormEvent, SetStateAction } from "react";
import type { Survey } from "./Survey";

export interface HandleSubmitSurveyProps {
  e: FormEvent<HTMLFormElement>;
  survey: Survey;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
}

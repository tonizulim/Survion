import type { Dispatch, SetStateAction } from "react";
import type { SetSurveyErrorsProps, Survey } from "..";

export interface HandleFetchSurveyProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSurvey: Dispatch<SetStateAction<Survey | null>>;
  id: number;
}

export interface HandleFetchAllSurveysProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSurveys: Dispatch<SetStateAction<Survey[] | null>>;
  userId?: number;
}

export interface HandleFetchSurveyResultsProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSurvey: Dispatch<SetStateAction<Survey | null>>;
  surveyId: number;
}

export interface HandleDeleteSurveyProps {
  surveyId: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface HandleDeactivateSurveyProps {
  surveyId: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface HandleSubmitSurveyProps {
  survey: Survey;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSurvey: Dispatch<SetStateAction<Survey>>;
  setErrors: ({ surveyValidationError }: SetSurveyErrorsProps) => void;
}

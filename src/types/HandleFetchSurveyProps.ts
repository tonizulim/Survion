import type { Survey } from "./Survey";
import type { Dispatch, SetStateAction } from "react";

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

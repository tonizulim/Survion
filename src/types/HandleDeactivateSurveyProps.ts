import type { Dispatch, SetStateAction } from "react";

export interface HandleDeactivateSurveyProps {
  surveyId: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

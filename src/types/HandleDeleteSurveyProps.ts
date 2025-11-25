import type { Dispatch, SetStateAction } from "react";

export interface HandleDeleteSurveyProps {
  surveyId: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

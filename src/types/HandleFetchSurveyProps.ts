import type { Survey } from "./Survey";
import type { Dispatch, SetStateAction } from "react";

export interface HandleFetchSurveyProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSurvey: Dispatch<SetStateAction<Survey | null>>;
  id: number;
}

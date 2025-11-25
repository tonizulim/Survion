import type { Dispatch, SetStateAction } from "react";
import type { Survey } from "./Survey";
import type { DeactivateProps } from "./useAllSurveysProps";

export interface SurveyCardProps {
  survey: Survey;
  setSurveyToDelete: Dispatch<SetStateAction<number>>;
  deactivate: ({ surveyId }: DeactivateProps) => void;
}

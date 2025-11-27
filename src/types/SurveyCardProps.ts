import type { Dispatch, SetStateAction } from "react";
import type { DeactivateProps, Survey } from ".";

export interface SurveyCardProps {
  survey: Survey;
  setSurveyToDelete: Dispatch<SetStateAction<number>>;
  deactivate: ({ surveyId }: DeactivateProps) => void;
  setShareSurveyId: Dispatch<SetStateAction<number>>;
}

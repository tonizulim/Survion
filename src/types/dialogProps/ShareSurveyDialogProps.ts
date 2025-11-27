import type { Dispatch, SetStateAction } from "react";

export interface ShareSurveyDialogProps {
  shareSurveyId: number;
  setShareSurveyId: Dispatch<SetStateAction<number>>;
}

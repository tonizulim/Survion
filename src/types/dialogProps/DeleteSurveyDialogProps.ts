import type { Dispatch, SetStateAction } from "react";

export interface DeleteSurveyDialogProps {
  deleteSurvey: () => void;
  setSurveyToDelete: Dispatch<SetStateAction<number>>;
}

import type { Dispatch, SetStateAction } from "react";
import type { DeactivateProps } from "../hooksProps";

export interface SurveyCardDropdownProps {
  surveyId: number;
  setSurveyToDelete: Dispatch<SetStateAction<number>>;
  deactivate: ({ surveyId }: DeactivateProps) => void;
}

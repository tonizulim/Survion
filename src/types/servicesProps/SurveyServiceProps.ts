import type { Survey } from "..";

export interface GetSurveyByIdProps {
  id: number;
}

export interface GetAllUserSurveysProps {
  userId?: number;
}

export interface GetSurveyResultsProps {
  surveyId: number;
}

export interface PostSurveyProps {
  survey: Survey;
}

export interface DeleteSurveyProps {
  surveyId: number;
}

export interface DeactivateSurveyProps {
  surveyId: number;
}

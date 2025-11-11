import type { SubmitSurveyProps } from "../types/SubmitSurveyProps";
import { apiClient } from "./apiClient";

export const submitSurvey = async ({ survey }: SubmitSurveyProps) => {
  try {
    const response = await apiClient.post("/survey", survey);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

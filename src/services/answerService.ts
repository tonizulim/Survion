import type { SubmitAnswerProps } from "../types";
import { apiClient } from "./apiClient";

export const postAnswers = async ({ answers, surveyId }: SubmitAnswerProps) => {
  try {
    const response = await apiClient.post(`/answer/${surveyId}`, answers);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

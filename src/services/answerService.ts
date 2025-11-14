import type { SubmitAnswerProps } from "../types/SubmitAnswerProps";
import { apiClient } from "./apiClient";

export const postAnswers = async ({ answers }: SubmitAnswerProps) => {
  try {
    const response = await apiClient.post("/answer", answers);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

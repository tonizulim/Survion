import type { GetSurveyByIdProps } from "../types/GetSurveyByIdProps";
import type { SubmitSurveyProps } from "../types/SubmitSurveyProps";
import { apiClient } from "./apiClient";

export const getSurveyById = async ({ id }: GetSurveyByIdProps) => {
  try {
    const response = await apiClient.get(`/survey/${id}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const submitSurvey = async ({ survey }: SubmitSurveyProps) => {
  try {
    const response = await apiClient.post("/survey", survey);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

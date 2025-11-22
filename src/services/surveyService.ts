import type {
  getAllUserSurveysProps,
  GetSurveyByIdProps,
} from "../types/GetSurveyByIdProps";
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

export const getAllUserSurveys = async ({ userId }: getAllUserSurveysProps) => {
  try {
    const url = userId ? `/survey/user/${userId}` : "/survey/user";
    const response = await apiClient.get(url);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const postSurvey = async ({ survey }: SubmitSurveyProps) => {
  try {
    const response = await apiClient.post("/survey", survey);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

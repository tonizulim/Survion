import type { DeactivateSurveyProps } from "../types/DeactivateSurveyProps";
import type { DeleteSurveyProps } from "../types/DeleteSurveyProps";
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

export const deactivateSurvey = async ({ surveyId }: DeactivateSurveyProps) => {
  try {
    const response = await apiClient.get(`/survey/deactivate/${surveyId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteSurvey = async ({ surveyId }: DeleteSurveyProps) => {
  try {
    const response = await apiClient.delete(`/survey/${surveyId}`);

    return response;
  } catch (error: any) {
    return error.response;
  }
};

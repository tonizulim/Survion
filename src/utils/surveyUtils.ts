import {
  getAllUserSurveys,
  getSurveyById,
  postSurvey,
} from "../services/surveyService";
import type {
  HandleFetchAllSurveysProps,
  HandleFetchSurveyProps,
} from "../types/HandleFetchSurveyProps";
import type { HandleSubmitSurveyProps } from "../types/HandleSubmitSurveyProps";

export const handleFetchSurvey = async ({
  setSurvey,
  setLoading,
  id,
}: HandleFetchSurveyProps) => {
  setLoading(true);

  try {
    const res = await getSurveyById({ id });
    if (res.status === 200) {
      setSurvey(res.data);
    }
  } catch (error) {
    console.error("Failed to load survey", error);
  }
  setLoading(false);
};

export const handleFetchAllSurveys = async ({
  setSurveys,
  setLoading,
  userId,
}: HandleFetchAllSurveysProps) => {
  setLoading(true);

  try {
    const res = await getAllUserSurveys({ userId });
    if (res.status === 200) {
      setSurveys(res.data);
    }
  } catch (error) {
    console.error("Failed to load surveys", error);
  }
  setLoading(false);
};

export const handleSubmitSurvey = async ({
  survey,
  setLoading,
  setIsSubmitted,
  setErrors,
}: HandleSubmitSurveyProps) => {
  setLoading(true);

  try {
    const res = await postSurvey({ survey });

    if (res.status === 200) {
      setIsSubmitted(true);
    } else {
      setErrors({ surveyValidationError: res.data });
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

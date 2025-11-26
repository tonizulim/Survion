import {
  deactivateSurvey,
  deleteSurvey,
  getAllUserSurveys,
  getSurveyById,
  getSurveyResults,
  postSurvey,
} from "../services";
import type {
  HandleDeactivateSurveyProps,
  HandleFetchAllSurveysProps,
  HandleFetchSurveyProps,
  HandleFetchSurveyResultsProps,
  HandleSubmitSurveyProps,
  HandleDeleteSurveyProps,
} from "../types";

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

export const handleFetchSurveyResults = async ({
  setLoading,
  setSurvey,
  surveyId,
}: HandleFetchSurveyResultsProps) => {
  setLoading(true);

  try {
    const res = await getSurveyResults({ surveyId });
    if (res.status === 200) {
      setSurvey(res.data);
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

export const handleDeactivateSurvey = async ({
  surveyId,
  setLoading,
}: HandleDeactivateSurveyProps) => {
  var status = false;
  setLoading(true);

  try {
    const res = await deactivateSurvey({ surveyId });

    if (res.status === 200) {
      status = true;
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
  return status;
};

export const handleDeleteSurvey = async ({
  surveyId,
  setLoading,
}: HandleDeleteSurveyProps) => {
  var status = false;
  setLoading(true);

  try {
    const res = await deleteSurvey({ surveyId });

    if (res.status === 200) {
      status = true;
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
  return status;
};

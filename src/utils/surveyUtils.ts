import { getSurveyById, postSurvey } from "../services/surveyService";
import type { HandleFetchSurveyProps } from "../types/HandleFetchSurveyProps";
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

export const handleSubmitSurvey = async ({
  e,
  survey,
  setLoading,
  setIsSubmitted,
  setErrors,
}: HandleSubmitSurveyProps) => {
  e.preventDefault();

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

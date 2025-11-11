import { submitSurvey } from "../services/surveyService";
import type { HandleSubmitSurveyProps } from "../types/HandleSubmitSurveyProps";

export const handleSubmitSurvey = async ({
  e,
  survey,
  setLoading,
  setIsSubmitted,
  setError,
}: HandleSubmitSurveyProps) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await submitSurvey({ survey });

    if (res.status === 200) {
      setIsSubmitted(true);
    } else {
      setError(res.data);
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

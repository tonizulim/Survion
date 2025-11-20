import { postAnswers } from "../services/answerService";
import type { HandleSubmitAnswersProps } from "../types/HandleSubmitAnswersProps";

export const handleSubmitAnswers = async ({
  answers,
  surveyId,
  setLoading,
  setIsSubmitted,
  setErrors,
}: HandleSubmitAnswersProps) => {
  setLoading(true);

  try {
    const res = await postAnswers({ answers, surveyId });
    if (res.status === 200) {
      setIsSubmitted(true);
    } else {
      console.error(res.data);
      if (res.data.title == "Validation failed") {
        setErrors({ answerValidationError: res.data });
      }
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

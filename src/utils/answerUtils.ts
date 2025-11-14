import { postAnswers } from "../services/answerService";
import type { HandleSubmitAnswersProps } from "../types/HandleSubmitAnswersProps";

export const handleSubmitAnswers = async ({
  answers,
  setLoading,
  setIsSubmitted,
}: //setErrors,
HandleSubmitAnswersProps) => {
  setLoading(true);

  try {
    const res = await postAnswers({ answers });

    if (res.status === 200) {
      setIsSubmitted(true);
    } else {
      //setErrors({ surveyValidationError: res.data });
    }
  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

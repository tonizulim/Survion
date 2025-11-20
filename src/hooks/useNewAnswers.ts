import { useEffect, useRef, useState } from "react";
import type { Answer } from "../types/Answer";
import type { Question } from "../types/Question";
import type {
  EditCheckboxAnswerProps,
  EditRankingAnswerProps,
  EditRatingAnswerProps,
  EditTextAnswerProps,
  SetErrorsProps,
  SubmitAnswersProps,
} from "../types/useNewAnswersProps";
import { handleSubmitAnswers } from "../utils/answerUtils";
import { QuestionType } from "../enums/QuestionType";

export function useNewAnswers(questions: Question[]) {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && questions.length > 0) {
      setAnswers(
        questions.map((q) => ({
          text: "",
          questionId: q.id ?? 0,
          errors: "",
          answerOptions: [],
          required: q.isRequired,
          requireOptions:
            q.questionTypeId == QuestionType.Checkbox ||
            q.questionTypeId == QuestionType.MultipleChoice ||
            q.questionTypeId == QuestionType.Ranking,
        }))
      );
      initialized.current = true;
    }
    setLoadingAnswers(false);
  }, [questions]);

  const editTextAnswer = ({ text, questionPosition }: EditTextAnswerProps) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionPosition] = {
        ...updatedAnswers[questionPosition],
        text: text,
      };

      return updatedAnswers;
    });
  };

  const editRatingAnswer = ({
    rating,
    questionPosition,
  }: EditRatingAnswerProps) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionPosition] = {
        ...updatedAnswers[questionPosition],
        text: rating.toString(),
      };

      return updatedAnswers;
    });
  };

  const editCheckboxAnswer = ({
    questionOption,
    questionPosition,
  }: EditCheckboxAnswerProps) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      const updatedAnswer = {
        ...updatedAnswers[questionPosition],
      };

      updatedAnswer.answerOptions = updatedAnswer.answerOptions.some(
        (a) => a.id == questionOption.id
      )
        ? []
        : [{ ...questionOption, questionOptionId: questionOption.id || 0 }];

      updatedAnswers[questionPosition] = updatedAnswer;
      return updatedAnswers;
    });
  };

  const editRankingAnswer = ({
    rank,
    questionOption,
    questionPosition,
  }: EditRankingAnswerProps) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionPosition] = {
        ...updatedAnswers[questionPosition],
        answerOptions: [
          { ...questionOption, questionOptionId: questionOption.id || 0 },
        ],
      };

      return updatedAnswers;
    });
  };

  const editMultipleChoiceAnswer = ({
    questionOption,
    questionPosition,
  }: EditCheckboxAnswerProps) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      const updatedAnswer = {
        ...updatedAnswers[questionPosition],
      };

      updatedAnswer.answerOptions = updatedAnswer.answerOptions.some(
        (a) => a.id == questionOption.id
      )
        ? updatedAnswer.answerOptions.filter((o) => o.id != questionOption.id)
        : [
            ...updatedAnswer.answerOptions,
            { ...questionOption, questionOptionId: questionOption.id || 0 },
          ];

      updatedAnswers[questionPosition] = updatedAnswer;
      return updatedAnswers;
    });
  };

  const setErrors = ({ answerValidationError }: SetErrorsProps) => {
    const validationErrors = answerValidationError[
      answerValidationError.title
    ] as Record<string, string>;
    setAnswers((prev) => {
      const updatedAnswers = [...prev].map((a, index) => ({
        ...a,
        errors: validationErrors[`answer.${index}`] || "",
      }));

      return updatedAnswers;
    });
  };

  const submitAnswers = ({ surveyId }: SubmitAnswersProps) => {
    handleSubmitAnswers({
      answers,
      surveyId: surveyId,
      setIsSubmitted,
      setLoading: setLoadingAnswers,
      setErrors: setErrors,
    });
  };

  return {
    answers,
    loadingAnswers,
    isSubmitted,
    editTextAnswer,
    editRatingAnswer,
    editCheckboxAnswer,
    editRankingAnswer,
    editMultipleChoiceAnswer,
    submitAnswers,
  };
}

import { useEffect, useRef, useState } from "react";
import type { Answer } from "../types/Answer";
import type { Question } from "../types/Question";
import type {
  EditCheckboxAnswerProps,
  EditRankingAnswerProps,
  EditRatingAnswerProps,
  EditTextAnswerProps,
} from "../types/useNewAnswersProps";
import { handleSubmitAnswers } from "../utils/answerUtils";

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
          answerOptions: [],
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
      updatedAnswers[questionPosition] = {
        ...updatedAnswers[questionPosition],
        answerOptions: [questionOption],
      };

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
        answerOptions: [questionOption],
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
      const updatedAnswer = { ...updatedAnswers[questionPosition] };

      updatedAnswer.answerOptions = updatedAnswer.answerOptions.includes(
        questionOption
      )
        ? (updatedAnswer.answerOptions = updatedAnswer.answerOptions.filter(
            (o) => o != questionOption
          ))
        : [...updatedAnswer.answerOptions, questionOption];

      updatedAnswers[questionPosition] = updatedAnswer;
      return updatedAnswers;
    });
  };

  const submitAnswers = () => {
    handleSubmitAnswers({
      answers,
      setIsSubmitted,
      setLoading: setLoadingAnswers,
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

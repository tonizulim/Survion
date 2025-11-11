import { useState } from "react";
import type { Survey } from "../types/Survey";
import type {
  addQuestionOptionsProps,
  deleteQuestionOptionProps,
  deleteQuestionProps,
  editQuestionOptionsProps,
  editQuestionProps,
  editQuestionRatingProps,
  editQuestionTypeProps,
} from "../types/useNewUserProps";
import type { QuestionOption } from "../types/QuestionOption";

export function useNewSurvey() {
  const [survey, setSurvey] = useState<Survey>({
    title: "",
    description: "",
    createDate: new Date(),
    isActive: true,
    duration: 0,
    authorEmail: "",
    questions: [],
  });

  const addQuestion = () =>
    setSurvey((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          text: "",
          questionPosition: survey.questions.length,
          isRequired: false,
          questionTypeId: 1,
          options: [],
        },
      ],
    }));

  const editQuestionType = ({ position, newType }: editQuestionTypeProps) =>
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[position].questionTypeId = newType;
      return {
        ...prev,
        questions: updatedQuestions,
      };
    });

  const editQuestion = ({ position, question }: editQuestionProps) =>
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[position] = question;
      return {
        ...prev,
        questions: updatedQuestions,
      };
    });

  const deleteQuestion = ({ position }: deleteQuestionProps) =>
    setSurvey((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, index) => index !== position),
    }));

  const addQuestionOption = ({
    option,
    questionPosition,
  }: addQuestionOptionsProps) => {
    const newOption: QuestionOption = {
      id: crypto.randomUUID(),
      value: option,
    };
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      const targetQuestion = {
        ...updatedQuestions[questionPosition],
        options: [...updatedQuestions[questionPosition].options, newOption],
      };
      updatedQuestions[questionPosition] = targetQuestion;

      return {
        ...prev,
        questions: updatedQuestions,
      };
    });
  };

  const editQuestionOption = ({
    option,
    optionId,
    questionPosition,
  }: editQuestionOptionsProps) => {
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      const updateOptions = [...updatedQuestions[questionPosition].options].map(
        (o) => (o.id === optionId ? { ...o, value: option } : o)
      );

      updatedQuestions[questionPosition].options = updateOptions;

      return {
        ...prev,
        questions: updatedQuestions,
      };
    });
  };

  const deleteQuestionOption = ({
    optionId,
    questionPosition,
  }: deleteQuestionOptionProps) => {
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      const updatedOptions = [
        ...updatedQuestions[questionPosition].options,
      ].filter((o) => o.id !== optionId);

      updatedQuestions[questionPosition].options = updatedOptions;

      return {
        ...prev,
        questions: updatedQuestions,
      };
    });
  };

  const editQuestionRating = ({
    questionPosition,
    minValue,
    maxValue,
  }: editQuestionRatingProps) => {
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];

      updatedQuestions[questionPosition].maxRating = maxValue;
      updatedQuestions[questionPosition].minRating = minValue;

      return {
        ...prev,
        questions: updatedQuestions,
      };
    });
  };

  return {
    survey,
    setSurvey,
    addQuestion,
    editQuestionType,
    editQuestion,
    deleteQuestion,
    addQuestionOption,
    editQuestionOption,
    deleteQuestionOption,
    editQuestionRating,
  };
}

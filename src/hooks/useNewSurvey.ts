import { useState } from "react";

import { handleSubmitSurvey } from "../utils";
import type {
  AddQuestionOptionsProps,
  DeleteQuestionOptionProps,
  DeleteQuestionProps,
  EditQuestionOptionsProps,
  EditQuestionProps,
  EditQuestionRatingProps,
  EditQuestionTypeProps,
  QuestionOption,
  SetSurveyErrorsProps,
  SubmitSurveyProps,
  Survey,
} from "../types";

export function useNewSurvey() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [survey, setSurvey] = useState<Survey>({
    title: "",
    description: "",
    createDate: new Date(),
    isActive: true,
    duration: 0,
    authorEmail: "",
    errors: "",
    questions: [],
  });

  const addQuestion = () =>
    setSurvey((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          text: "",
          questionPosition: survey.questions.length + 1,
          isRequired: false,
          questionTypeId: 1,
          errors: "",
          questionOptions: [],
        },
      ],
    }));

  const editQuestionType = ({ position, newType }: EditQuestionTypeProps) =>
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[position].questionTypeId = newType;
      return {
        ...prev,
        questions: updatedQuestions,
      };
    });

  const editQuestion = ({ position, question }: EditQuestionProps) =>
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[position] = question;
      return {
        ...prev,
        questions: updatedQuestions,
      };
    });

  const deleteQuestion = ({ position }: DeleteQuestionProps) =>
    setSurvey((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, index) => index !== position),
    }));

  const addQuestionOption = ({
    option,
    questionPosition,
  }: AddQuestionOptionsProps) => {
    const newOption: QuestionOption = {
      key: Date.now() + Math.floor(Math.random() * 1000),
      text: option,
    };
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      const targetQuestion = {
        ...updatedQuestions[questionPosition],
        questionOptions: [
          ...updatedQuestions[questionPosition].questionOptions,
          newOption,
        ],
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
  }: EditQuestionOptionsProps) => {
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      const updateOptions = [
        ...updatedQuestions[questionPosition].questionOptions,
      ].map((o) => (o.key === optionId ? { ...o, value: option } : o));

      updatedQuestions[questionPosition].questionOptions = updateOptions;

      return {
        ...prev,
        questions: updatedQuestions,
      };
    });
  };

  const deleteQuestionOption = ({
    optionId,
    questionPosition,
  }: DeleteQuestionOptionProps) => {
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions];
      const updatedOptions = [
        ...updatedQuestions[questionPosition].questionOptions,
      ].filter((o) => o.key !== optionId);

      updatedQuestions[questionPosition].questionOptions = updatedOptions;

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
  }: EditQuestionRatingProps) => {
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

  const removeErrors = () => {
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions].map((q) => ({
        ...q,
        errors: "",
      }));

      return {
        ...prev,
        errors: "",
        questions: updatedQuestions,
      };
    });
  };

  const setErrors = ({ surveyValidationError }: SetSurveyErrorsProps) => {
    console.log(surveyValidationError);
    const validationErrors = surveyValidationError[
      "Validation failed"
    ] as Record<string, string>;
    setSurvey((prev) => {
      const updatedQuestions = [...prev.questions].map((q, index) => ({
        ...q,
        errors: validationErrors[`questions.${index}`],
      }));

      return {
        ...prev,
        errors: surveyValidationError.detail,
        questions: updatedQuestions,
      };
    });
  };

  const submitSurvey = ({ e, setLoading }: SubmitSurveyProps) => {
    e.preventDefault();
    console.log(survey);
    handleSubmitSurvey({
      survey,
      setIsSubmitted,
      setErrors,
      setLoading,
    });
  };

  return {
    survey,
    isSubmitted,
    setSurvey,
    addQuestion,
    editQuestionType,
    editQuestion,
    deleteQuestion,
    addQuestionOption,
    editQuestionOption,
    deleteQuestionOption,
    editQuestionRating,
    removeErrors,
    setErrors,
    submitSurvey,
  };
}

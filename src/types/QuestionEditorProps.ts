import type { Question } from "./Question";
import type {
  addQuestionOptionsProps,
  deleteQuestionOptionProps,
  deleteQuestionProps,
  editQuestionOptionsProps,
  editQuestionProps,
  editQuestionRatingProps,
  editQuestionTypeProps,
} from "./useNewUserProps";

export interface QuestionEditorProps {
  question: Question;
  questionPosition: number;
  editQuestionType: ({ position, newType }: editQuestionTypeProps) => void;
  editQuestion: ({ position, question }: editQuestionProps) => void;
  deleteQuestion: ({ position }: deleteQuestionProps) => void;
  addQuestionOption: ({
    questionPosition,
    option,
  }: addQuestionOptionsProps) => void;
  editQuestionOption: ({
    questionPosition,
    optionId,
    option,
  }: editQuestionOptionsProps) => void;
  deleteQuestionOption: ({
    optionId,
    questionPosition,
  }: deleteQuestionOptionProps) => void;
  editQuestionRating: ({
    questionPosition,
    minValue,
    maxValue,
  }: editQuestionRatingProps) => void;
}

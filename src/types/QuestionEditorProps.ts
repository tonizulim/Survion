import type { Question } from "./Question";
import type {
  AddQuestionOptionsProps,
  DeleteQuestionOptionProps,
  DeleteQuestionProps,
  EditQuestionOptionsProps,
  EditQuestionProps,
  EditQuestionRatingProps,
  EditQuestionTypeProps,
} from "./useNewUserProps";

export interface QuestionEditorProps {
  question: Question;
  questionPosition: number;
  editQuestionType: ({ position, newType }: EditQuestionTypeProps) => void;
  editQuestion: ({ position, question }: EditQuestionProps) => void;
  deleteQuestion: ({ position }: DeleteQuestionProps) => void;
  addQuestionOption: ({
    questionPosition,
    option,
  }: AddQuestionOptionsProps) => void;
  editQuestionOption: ({
    questionPosition,
    optionId,
    option,
  }: EditQuestionOptionsProps) => void;
  deleteQuestionOption: ({
    optionId,
    questionPosition,
  }: DeleteQuestionOptionProps) => void;
  editQuestionRating: ({
    questionPosition,
    minValue,
    maxValue,
  }: EditQuestionRatingProps) => void;
}

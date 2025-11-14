import type { Answer } from "./Answer";
import type { Question } from "./Question";
import type {
  EditCheckboxAnswerProps,
  EditRankingAnswerProps,
  EditRatingAnswerProps,
  EditTextAnswerProps,
} from "./useNewAnswersProps";

export interface TakeQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editTextAnswer: ({ text, questionPosition }: EditTextAnswerProps) => void;
  editRatingAnswer: ({
    rating,
    questionPosition,
  }: EditRatingAnswerProps) => void;
  editCheckboxAnswer: ({
    questionOption,
    questionPosition,
  }: EditCheckboxAnswerProps) => void;
  editMultipleChoiceAnswer: ({
    questionOption,
    questionPosition,
  }: EditCheckboxAnswerProps) => void;
  editRankingAnswer: ({
    questionOption,
    questionPosition,
    rank,
  }: EditRankingAnswerProps) => void;
}

import type {
  Answer,
  Question,
  EditCheckboxAnswerProps,
  EditRankingAnswerProps,
  EditRatingAnswerProps,
  EditTextAnswerProps,
} from "..";

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

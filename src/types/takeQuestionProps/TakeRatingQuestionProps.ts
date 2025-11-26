import type { Answer, Question, EditRatingAnswerProps } from "..";

export interface TakeRatingQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editRatingAnswer: ({
    rating,
    questionPosition,
  }: EditRatingAnswerProps) => void;
}

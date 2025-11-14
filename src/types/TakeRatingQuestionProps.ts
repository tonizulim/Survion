import type { Answer } from "./Answer";
import type { Question } from "./Question";
import type { EditRatingAnswerProps } from "./useNewAnswersProps";

export interface TakeRatingQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editRatingAnswer: ({
    rating,
    questionPosition,
  }: EditRatingAnswerProps) => void;
}

import type { Answer } from "./Answer";
import type { Question } from "./Question";
import type { EditRankingAnswerProps } from "./useNewAnswersProps";

export interface TakeRankingQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editRankingAnswer: ({
    rank,
    questionOption,
    questionPosition,
  }: EditRankingAnswerProps) => void;
}

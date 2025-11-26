import type { Answer, Question, EditRankingAnswerProps } from "..";

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

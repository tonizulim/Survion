import type { Answer, Question, EditMultipleChoiceAnswerProps } from "..";

export interface TakeMultipleChoiceQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editMultipleChoiceAnswer: ({
    questionOption,
    questionPosition,
  }: EditMultipleChoiceAnswerProps) => void;
}

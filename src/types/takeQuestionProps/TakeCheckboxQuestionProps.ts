import type { EditCheckboxAnswerProps, Answer, Question } from "..";

export interface TakeCheckboxQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editCheckboxAnswer: ({
    questionOption,
    questionPosition,
  }: EditCheckboxAnswerProps) => void;
}

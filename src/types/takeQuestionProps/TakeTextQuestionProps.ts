import type { Answer, EditTextAnswerProps } from "..";

export interface TakeTextQuestionProps {
  answer: Answer;
  index: number;
  editTextAnswer: ({ text, questionPosition }: EditTextAnswerProps) => void;
}

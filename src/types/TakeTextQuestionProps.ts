import type { Answer } from "./Answer";
import type { EditTextAnswerProps } from "./useNewAnswersProps";

export interface TakeTextQuestionProps {
  answer: Answer;
  index: number;
  editTextAnswer: ({ text, questionPosition }: EditTextAnswerProps) => void;
}

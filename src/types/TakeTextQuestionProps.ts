import type { Answer } from "./Answer";
import type { Question } from "./Question";
import type { EditTextAnswerProps } from "./useNewAnswersProps";

export interface TakeTextQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editTextAnswer: ({ text, questionPosition }: EditTextAnswerProps) => void;
}

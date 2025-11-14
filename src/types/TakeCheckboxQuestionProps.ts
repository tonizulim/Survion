import type { Answer } from "./Answer";
import type { Question } from "./Question";
import type { EditCheckboxAnswerProps } from "./useNewAnswersProps";

export interface TakeCheckboxQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editCheckboxAnswer: ({
    questionOption,
    questionPosition,
  }: EditCheckboxAnswerProps) => void;
}

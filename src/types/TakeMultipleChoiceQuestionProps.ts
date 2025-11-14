import type { Answer } from "./Answer";
import type { Question } from "./Question";
import type { editMultipleChoiceAnswerProps } from "./useNewAnswersProps";

export interface TakeMultipleChoiceQuestionProps {
  question: Question;
  answer: Answer;
  index: number;
  editMultipleChoiceAnswer: ({
    questionOption,
    questionPosition,
  }: editMultipleChoiceAnswerProps) => void;
}

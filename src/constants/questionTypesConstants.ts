import { QuestionType } from "../enums";

export const MULTIPLE_OPTION_QUESTION_TYPES: readonly number[] = [
  QuestionType.MultipleChoice,
  QuestionType.Checkbox,
  QuestionType.Ranking,
] as const;

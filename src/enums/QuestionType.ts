export const QuestionType = {
  TextQuestion: 1,
  MultipleChoice: 2,
  Checkbox: 3,
  Rating: 4,
  Ranking: 5,
} as const;

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];

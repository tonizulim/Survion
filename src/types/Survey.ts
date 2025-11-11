import type { Question } from "./Question";

export type Survey = {
  title: string;
  description: string;
  createDate: Date;
  isActive: boolean;
  duration: number;
  authorEmail: string;
  questions: Question[];
};

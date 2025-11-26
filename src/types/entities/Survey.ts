import type { Question } from ".";

export type Survey = {
  id?: number;
  title: string;
  description: string;
  createDate: Date;
  isActive: boolean;
  duration: number;
  authorEmail: string;
  errors: string;
  questions: Question[];
};

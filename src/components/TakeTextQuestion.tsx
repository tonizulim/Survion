import type { TakeQuestionProps } from "../types/TakeQuestionProps";

export function TakeTextQuestion({ question, index }: TakeQuestionProps) {
  return (
    <textarea
      className="w-full border-2 border-accent rounded-lg p-2"
      placeholder={question.text}
      //onChange={(e) => handleAnswerChange(question.id, e.target.value)}
      rows={3}
    />
  );
}

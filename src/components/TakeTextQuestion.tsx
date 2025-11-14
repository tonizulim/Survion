import type { TakeTextQuestionProps } from "../types/TakeTextQuestionProps";

export function TakeTextQuestion({
  question,
  editTextAnswer,
  index,
}: TakeTextQuestionProps) {
  return (
    <textarea
      className="w-full border-2 border-accent rounded-lg p-2"
      placeholder={question.text}
      onChange={(e) =>
        editTextAnswer({ text: e.target.value, questionPosition: index })
      }
      rows={3}
    />
  );
}

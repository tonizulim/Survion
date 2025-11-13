import type { TakeQuestionProps } from "../types/TakeQuestionProps";

export function TakeCheckboxQuestion({ question, index }: TakeQuestionProps) {
  return (
    <div>
      {question.questionOptions?.map((o, index) => (
        <button
          key={o.id || index}
          className="w-full text-center bg-accent mt-2 rounded-md cursor-pointer"
        >
          {o.text}
        </button>
      ))}
    </div>
  );
}

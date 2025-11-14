import { twMerge } from "tailwind-merge";
import type { TakeCheckboxQuestionProps } from "../types/TakeCheckboxQuestionProps";

export function TakeCheckboxQuestion({
  question,
  answer,
  editCheckboxAnswer,
  index,
}: TakeCheckboxQuestionProps) {
  return (
    <div>
      {question.questionOptions?.map((o, OptionIndex) => (
        <button
          key={o.id || OptionIndex}
          onClick={() =>
            editCheckboxAnswer({ questionPosition: index, questionOption: o })
          }
          className={twMerge(
            "w-full text-center bg-accent font-semibold mt-2 rounded-md cursor-pointer",
            o == answer?.answerOptions[0] && "bg-selected"
          )}
        >
          {o.text}
        </button>
      ))}
    </div>
  );
}

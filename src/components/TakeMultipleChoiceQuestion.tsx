import { twMerge } from "tailwind-merge";
import type { TakeMultipleChoiceQuestionProps } from "../types/TakeMultipleChoiceQuestionProps";

export function TakeMultipleChoiceQuestion({
  question,
  answer,
  editMultipleChoiceAnswer,
  index,
}: TakeMultipleChoiceQuestionProps) {
  return (
    <div>
      {question.questionOptions?.map((o, OptionIndex) => (
        <button
          key={o.id || OptionIndex}
          onClick={() =>
            editMultipleChoiceAnswer({
              questionPosition: index,
              questionOption: o,
            })
          }
          className={twMerge(
            "w-full text-center bg-accent font-semibold mt-2 rounded-md cursor-pointer",
            answer?.answerOptions.some((a) => a.id == o.id) && "bg-selected"
          )}
        >
          {o.text}
        </button>
      ))}
    </div>
  );
}

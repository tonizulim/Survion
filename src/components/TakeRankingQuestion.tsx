import { twMerge } from "tailwind-merge";
import type { TakeRankingQuestionProps } from "../types/TakeRankingQuestionProps";

export function TakeRankingQuestion({
  question,
  index,
  answer,
  editRankingAnswer,
}: TakeRankingQuestionProps) {
  return (
    <div>
      {question.questionOptions?.map((o, OptionIndex) => (
        <button
          key={o.id || OptionIndex}
          onClick={() =>
            editRankingAnswer({
              questionPosition: index,
              questionOption: o,
              rank: 1,
            })
          }
          className={twMerge(
            "w-full text-center bg-accent font-semibold mt-2 rounded-md cursor-pointer",
            answer?.answerOptions.includes(o) && "bg-selected"
          )}
        >
          {o.text}
        </button>
      ))}
    </div>
  );
}

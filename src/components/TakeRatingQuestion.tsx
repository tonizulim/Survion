import { Minus, Plus } from "lucide-react";
import type { TakeQuestionProps } from "../types/TakeQuestionProps";

export function TakeRatingQuestion({ question, index }: TakeQuestionProps) {
  return (
    <div>
      <div className="flex justify-between px-4">
        <p>{question.minRating}</p>
        <p>{question.maxRating}</p>
      </div>
      <input
        type="range"
        min={question.minRating}
        max={question.maxRating}
        step={1}
        value={0}
        //onChange={}
        className="w-full cursor-pointer"
      />

      <div className="flex justify-between px-2">
        <button>
          <Minus className="bg-accent w-8 h-8 flex justify-center items-center rounded-md cursor-pointer" />
        </button>
        <button className="bg-accent w-10 h-10 flex justify-center items-center rounded-md cursor-pointer">
          <Plus />
        </button>
      </div>
    </div>
  );
}

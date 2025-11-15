import { Minus, Plus } from "lucide-react";
import type { TakeRatingQuestionProps } from "../types/TakeRatingQuestionProps";
import { useTranslation } from "react-i18next";

export function TakeRatingQuestion({
  question,
  answer,
  index,
  editRatingAnswer,
}: TakeRatingQuestionProps) {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="flex justify-between px-4">
        <p>{question.minRating}</p>
        {answer?.text && (
          <p className="font-semibold">
            {t("current")}: {answer.text}
          </p>
        )}
        <p>{question.maxRating}</p>
      </div>
      <input
        type="range"
        min={question.minRating}
        max={question.maxRating}
        step={1}
        value={parseInt(answer?.text) || question.minRating || 0}
        onChange={(e) =>
          editRatingAnswer({
            rating: parseInt(e.target.value),
            questionPosition: index,
          })
        }
        className="w-full cursor-pointer"
      />

      <div className="flex justify-between px-2">
        <button
          className="bg-accent w-10 h-10 flex justify-center items-center rounded-md cursor-pointer"
          onClick={() =>
            editRatingAnswer({
              rating:
                parseInt(answer.text) > (question.minRating || 0)
                  ? parseInt(answer.text) - 1
                  : parseInt(answer.text),
              questionPosition: index,
            })
          }
        >
          <Minus />
        </button>
        <button
          className="bg-accent w-10 h-10 flex justify-center items-center rounded-md cursor-pointer"
          onClick={() =>
            editRatingAnswer({
              rating:
                parseInt(answer.text) < (question.maxRating || 0)
                  ? parseInt(answer.text) + 1
                  : parseInt(answer.text),
              questionPosition: index,
            })
          }
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}

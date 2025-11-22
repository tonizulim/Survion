import { useTranslation } from "react-i18next";
import type { TakeTextQuestionProps } from "../types/TakeTextQuestionProps";

export function TakeTextQuestion({
  answer,
  editTextAnswer,
  index,
}: TakeTextQuestionProps) {
  const { t } = useTranslation("common");
  return (
    <textarea
      className="w-full border-2 border-accent rounded-lg p-2"
      placeholder={t("common.TextAnswerPlaceholder")}
      value={answer ? answer.text : ""}
      onChange={(e) =>
        editTextAnswer({ text: e.target.value, questionPosition: index })
      }
      rows={3}
    />
  );
}

import { useTranslation } from "react-i18next";
import type { MultipleChoiceAnswersProps } from "../../types";

export function MultipleChoiceAnswers({
  questionOptions,
  count,
}: MultipleChoiceAnswersProps) {
  const { t } = useTranslation("questionResult");
  return (
    <>
      {count == 0 && (
        <div className="m-4 p-6  rounded-2xl border-2 shadow-lg">
          <p>{t("noAnswers")}</p>
        </div>
      )}
      {questionOptions.map((a, index) => (
        <div
          key={index}
          className="m-4 p-6 rounded-2xl border-2 shadow-lg flex flex-row justify-between bg-muted"
        >
          <p>{a.text}</p>
          <p>
            {a.count} / {count}
          </p>
        </div>
      ))}
    </>
  );
}

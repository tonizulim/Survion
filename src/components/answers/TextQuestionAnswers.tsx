import { useTranslation } from "react-i18next";
import type { TextQuestionAnswersProps } from "../../types";

export function TextQuestionAnswers({ answers }: TextQuestionAnswersProps) {
  const { t } = useTranslation("questionResult");

  if (!answers || answers.length === 0) {
    return (
      <div className="m-4 p-6  rounded-2xl border-2 shadow-lg">
        <p>{t("noAnswers")}</p>
      </div>
    );
  }

  return (
    <>
      {answers.map((a, index) => (
        <div key={index} className="m-4 p-6 rounded-2xl border-2 shadow-lg">
          <p>{a}</p>
        </div>
      ))}
    </>
  );
}

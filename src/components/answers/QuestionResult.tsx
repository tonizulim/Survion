import { useTranslation } from "react-i18next";
import { QuestionType } from "../../enums/QuestionType";
import type { QuestionResultProps } from "../../types";
import {
  TextQuestionAnswers,
  CheckboxQuestionAnswers,
  MultipleChoiceAnswers,
  RatingAnswers,
} from ".";

export function QuestionResult({ question, index }: QuestionResultProps) {
  const { t } = useTranslation("questionEditorComponent");

  return (
    <div className="m-4 p-6 w-full md:w-3xl rounded-2xl border-2 shadow-lg">
      <div className="flex flex-row justify-between text-center">
        <h1 className="text-xl font-semibold m-3">
          {index + 1}. {question.text}
        </h1>
        {question.isRequired && (
          <p className="m-3 font-semibold">{t("common.Require")}</p>
        )}
      </div>
      {(() => {
        switch (question.questionTypeId) {
          case QuestionType.TextQuestion:
            return <TextQuestionAnswers answers={question.answers} />;
          case QuestionType.Checkbox:
            return (
              <CheckboxQuestionAnswers
                questionOptions={question.questionOptions}
                count={question.responses || 0}
              />
            );
          case QuestionType.MultipleChoice:
            return (
              <MultipleChoiceAnswers
                questionOptions={question.questionOptions}
                count={question.responses || 0}
              />
            );

          case QuestionType.Ranking:
            return;

          case QuestionType.Rating:
            return <RatingAnswers question={question} />;
          default:
            break;
        }
      })()}
    </div>
  );
}

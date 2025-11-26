import { QuestionType } from "../../enums";
import type { TakeQuestionProps } from "../../types";
import { useTranslation } from "react-i18next";
import {
  TakeRankingQuestion,
  TakeRatingQuestion,
  TakeTextQuestion,
  TakeCheckboxQuestion,
  TakeMultipleChoiceQuestion,
} from ".";

export function TakeQuestion({
  question,
  answer,
  index,
  editTextAnswer,
  editRatingAnswer,
  editCheckboxAnswer,
  editRankingAnswer,
  editMultipleChoiceAnswer,
}: TakeQuestionProps) {
  const { t } = useTranslation("common");

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
      {answer && answer.errors && (
        <p className="mt-1 text-destructive whitespace-pre-line">
          {answer.errors}
        </p>
      )}

      {(() => {
        switch (question.questionTypeId) {
          case QuestionType.TextQuestion:
            return (
              <TakeTextQuestion
                answer={answer}
                index={index}
                editTextAnswer={editTextAnswer}
              />
            );
          case QuestionType.Checkbox:
            return (
              <TakeCheckboxQuestion
                question={question}
                answer={answer}
                index={index}
                editCheckboxAnswer={editCheckboxAnswer}
              />
            );
          case QuestionType.MultipleChoice:
            return (
              <TakeMultipleChoiceQuestion
                question={question}
                answer={answer}
                index={index}
                editMultipleChoiceAnswer={editMultipleChoiceAnswer}
              />
            );
          case QuestionType.Ranking:
            return (
              <TakeRankingQuestion
                question={question}
                answer={answer}
                index={index}
                editRankingAnswer={editRankingAnswer}
              />
            );
          case QuestionType.Rating:
            return (
              <TakeRatingQuestion
                question={question}
                answer={answer}
                index={index}
                editRatingAnswer={editRatingAnswer}
              />
            );
          default:
            break;
        }
      })()}
    </div>
  );
}

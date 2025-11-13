import { QuestionType } from "../enums/QuestionType";
import type { TakeQuestionProps } from "../types/TakeQuestionProps";
import { TakeCheckboxQuestion } from "./TakeCheckboxQuestion";
import { TakeMultipleChoiceQuestion } from "./TakeMultipleChoiceQuestion";
import { TakeRankingQuestion } from "./TakeRankingQuestion";
import { TakeRatingQuestion } from "./TakeRatingQuestion";
import { TakeTextQuestion } from "./TakeTextQuestion";

export function TakeQuestion({ question, index }: TakeQuestionProps) {
  return (
    <div className="m-4 p-6 w-full md:w-3xl rounded-2xl border-2 shadow-lg">
      <h1 className="text-xl font-semibold m-3">
        {index + 1}. {question.text}
      </h1>

      {(() => {
        switch (question.questionTypeId) {
          case QuestionType.TextQuestion:
            return <TakeTextQuestion question={question} index={index} />;
          case QuestionType.Checkbox:
            return <TakeCheckboxQuestion question={question} index={index} />;
          case QuestionType.MultipleChoice:
            return (
              <TakeMultipleChoiceQuestion question={question} index={index} />
            );
          case QuestionType.Ranking:
            return <TakeRankingQuestion question={question} index={index} />;
          case QuestionType.Rating:
            return <TakeRatingQuestion question={question} index={index} />;
          default:
            break;
        }
      })()}
    </div>
  );
}

import { QuestionType } from "../enums/QuestionType";
import type { TakeQuestionProps } from "../types/TakeQuestionProps";
import { TakeCheckboxQuestion } from "./TakeCheckboxQuestion";
import { TakeMultipleChoiceQuestion } from "./TakeMultipleChoiceQuestion";
import { TakeRankingQuestion } from "./TakeRankingQuestion";
import { TakeRatingQuestion } from "./TakeRatingQuestion";
import { TakeTextQuestion } from "./TakeTextQuestion";

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
  return (
    <div className="m-4 p-6 w-full md:w-3xl rounded-2xl border-2 shadow-lg">
      <h1 className="text-xl font-semibold m-3">
        {index + 1}. {question.text}
      </h1>

      {(() => {
        switch (question.questionTypeId) {
          case QuestionType.TextQuestion:
            return (
              <TakeTextQuestion
                question={question}
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

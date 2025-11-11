import { Trash2, Plus } from "lucide-react";
import type { QuestionEditorProps } from "../types/QuestionEditorProps";
import { QuestionType } from "../enums/QuestionType";

export function QuestionEditor({
  question,
  editQuestionType,
  editQuestion,
  deleteQuestion,
  questionPosition,
  addQuestionOption,
  editQuestionOption,
  deleteQuestionOption,
  editQuestionRating,
}: QuestionEditorProps) {
  return (
    <>
      <div className="border-accent border-2 rounded-xl p-6">
        <div className="space-y-2">
          <label className="font-semibold">Question Type</label>
          <select
            id="questionType"
            name="questionType"
            className="block rounded-md border-accent shadow-sm p-2 mt-1"
            onChange={(e) =>
              editQuestionType({
                position: questionPosition,
                newType: parseInt(e.target.value),
              })
            }
          >
            <option value={QuestionType.TextQuestion}>Text Answer</option>
            <option value={QuestionType.MultipleChoice}>Multiple Choice</option>
            <option value={QuestionType.Checkbox}>Checkbox</option>
            <option value={QuestionType.Rating}>Rating</option>
            <option value={QuestionType.Ranking}>Ranking (Drag & Drop)</option>
          </select>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="text" className="font-semibold">
            Question
          </label>
          <input
            className="border-2 rounded-md border-accent p-2 mt-1"
            id="text"
            value={question.text}
            onChange={(e) =>
              editQuestion({
                position: questionPosition,
                question: { ...question, text: e.target.value },
              })
            }
            placeholder="Enter your question"
          />
        </div>
        <div className=" pt-3">
          {(question.questionTypeId === QuestionType.MultipleChoice ||
            question.questionTypeId === QuestionType.Checkbox ||
            question.questionTypeId === QuestionType.Ranking) && (
            <div className="space-y-2">
              <label htmlFor="Options" className="font-semibold">
                Options
              </label>
              <div className="space-y-2 w-full">
                {question.options?.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center gap-2  mt-1 w-full"
                  >
                    <input
                      className="border-2 rounded-md border-accent p-2 w-full"
                      id="Options"
                      onChange={(e) =>
                        editQuestionOption({
                          option: e.target.value,
                          optionId: option.id,
                          questionPosition,
                        })
                      }
                      value={option.value}
                    />
                    <button
                      type="button"
                      className="hover:bg-destructive cursor-pointer p-3 rounded-md"
                      onClick={() =>
                        deleteQuestionOption({
                          questionPosition,
                          optionId: option.id,
                        })
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() =>
                    addQuestionOption({
                      questionPosition,
                      option: `Option ${question.options.length + 1}`,
                    })
                  }
                  type="button"
                  className="text-md px-8 bg-secondary text-secondary-foreground hover:bg-accent rounded-lg p-2 font-semibold flex items-center cursor-pointer w-full justify-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add option
                </button>
              </div>
            </div>
          )}

          {question.questionTypeId === QuestionType.Rating && (
            <div className="space-y-2 flex gap-2">
              <div className=" space-y-2 flex flex-col w-full">
                <label htmlFor="minRank" className="font-semibold">
                  Minimum value
                </label>
                <input
                  id="minRank"
                  type="number"
                  min="1"
                  max={(question.maxRating || 6) - 1}
                  className="w-full border-2 rounded-md border-accent p-2"
                  value={question.minRating || 0}
                  onChange={(e) =>
                    editQuestionRating({
                      questionPosition,
                      minValue: parseInt(e.target.value),
                      maxValue: question.maxRating || 5,
                    })
                  }
                />
              </div>
              <div className=" space-y-2 flex flex-col w-full">
                <label htmlFor="maxRank" className="font-semibold">
                  Maximum value
                </label>
                <input
                  id="maxRank"
                  type="number"
                  min={(question.minRating || 4) + 1}
                  className="border-2 rounded-md border-accent p-2 w-full"
                  value={question.maxRating || 5}
                  onChange={(e) =>
                    editQuestionRating({
                      questionPosition,
                      maxValue: parseInt(e.target.value),
                      minValue: question.minRating || 0,
                    })
                  }
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex items-center gap-2 mt-3">
            <input
              id="required"
              type="checkbox"
              className="form-checkbox h-4 w-4 rounded-2xl accent-foreground"
              checked={question.isRequired}
              onChange={() =>
                editQuestion({
                  position: questionPosition,
                  question: { ...question, isRequired: !question.isRequired },
                })
              }
            />
            <label htmlFor="required" className="font-semibold">
              Required
            </label>
          </div>
          <button
            type="button"
            onClick={() => deleteQuestion({ position: questionPosition })}
            className="text-md px-8 bg-destructive text-primary-foreground rounded-lg p-2 font-semibold flex items-center cursor-pointer"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Question
          </button>
        </div>
      </div>
    </>
  );
}

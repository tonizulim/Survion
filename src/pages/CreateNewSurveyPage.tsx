import { ArrowLeft, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { QuestionEditor } from "../components/QuestionEditor";
import { useNewSurvey } from "../hooks/useNewSurvey";

export function CreateNewSurveyPage() {
  const { t } = useTranslation("createNewSurveyPage");
  const {
    survey,
    setSurvey,
    addQuestion,
    editQuestionType,
    editQuestion,
    deleteQuestion,
    addQuestionOption,
    editQuestionOption,
    deleteQuestionOption,
    editQuestionRating,
  } = useNewSurvey();

  return (
    <div className="min-h-screen flex items-center justify-center pt-10 mt-10">
      <div className="w-full p-6 m-6 sm:max-w-4xl sm:rounded-2xl sm:border-2 sm:shadow-2xl">
        <Link to="/dashboard">
          <button
            type="button"
            className="flex flex-row items-center border-2 text-md rounded-xl p-2"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("back")}
          </button>
        </Link>

        <div className="mx-auto py-4 max-w-4xl">
          <div>
            <h1 className="text-xl font-semibold">{t("title")}</h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>

          <form>
            <div className="flex flex-col mt-3">
              <label htmlFor="title" className="font-semibold">
                {t("surveyTitle")}
              </label>
              <input
                className="border-2 rounded-md border-accent p-2"
                id="title"
                placeholder={t("surveyTitlePlaceholder")}
                value={survey.title}
                onChange={(e) =>
                  setSurvey((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="description" className="font-semibold">
                {t("surveyDescription")}
              </label>
              <input
                className="border-2 rounded-md border-accent p-2"
                id="description"
                value={survey.description}
                onChange={(e) =>
                  setSurvey((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder={t("surveyDescriptionPlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 mt-3">
                <input
                  id="timeLimit"
                  type="checkbox"
                  checked={survey.duration !== 0}
                  onChange={() => {
                    setSurvey((prev) => ({
                      ...prev,
                      duration: prev.duration === 0 ? 30 : 0,
                    }));
                  }}
                  className="form-checkbox h-4 w-4 rounded-2xl accent-foreground"
                />
                <label htmlFor="timeLimit" className="font-semibold">
                  {t("setTimeLimit")}
                </label>
              </div>
              {!!survey.duration && (
                <div className="ml-6 space-y-2 flex flex-col">
                  <label htmlFor="timeLimitMinutes" className="font-semibold">
                    {t("timeLimit")}
                  </label>
                  <input
                    id="timeLimitMinutes"
                    type="number"
                    min="1"
                    value={survey.duration}
                    onChange={(e) =>
                      setSurvey((prev) => ({
                        ...prev,
                        duration: Number.parseInt(e.target.value),
                      }))
                    }
                    className="w-32 border-2 rounded-md border-accent p-2"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4 mt-3">
              <div className="flex items-center justify-between">
                <label className="font-semibold text-2xl">Questions</label>
                <button
                  type="button"
                  onClick={addQuestion}
                  className="text-md px-4 bg-primary text-primary-foreground rounded-lg p-2 font-semibold flex items-center cursor-pointer"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {t("addQuestion")}
                </button>
              </div>

              {survey.questions.length === 0 ? (
                <div className="border-dashed border-2 rounded-2xl pt-12 pb-12 text-center flex flex-col items-center justify-center">
                  <p className="text-muted-foreground mb-4">
                    {t("noQuestions")}
                  </p>
                  <button
                    type="button"
                    onClick={addQuestion}
                    className="border-solid border-2 border-muted rounded-xl p-2 flex items-center cursor-pointer"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {t("addFirstQuestion")}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {survey.questions.map((question, index) => {
                    return (
                      <QuestionEditor
                        key={index}
                        question={question}
                        editQuestionType={editQuestionType}
                        editQuestion={editQuestion}
                        deleteQuestion={deleteQuestion}
                        questionPosition={index}
                        addQuestionOption={addQuestionOption}
                        editQuestionOption={editQuestionOption}
                        deleteQuestionOption={deleteQuestionOption}
                        editQuestionRating={editQuestionRating}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 pt-4 mt-3">
              <button
                type="submit"
                className="text-md px-8 bg-primary text-primary-foreground rounded-lg p-2 font-semibold flex items-center cursor-pointer"
              >
                {t("create")}
              </button>
              <button
                type="button"
                className="text-md px-8 bg-secondary text-secondary-foreground rounded-lg p-2 font-semibold flex items-center cursor-pointer"
              >
                {t("cancel")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

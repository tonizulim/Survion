import { useTranslation } from "react-i18next";
import { useSurveyById } from "../hooks/useSurvey";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { SurveyNotFound } from "../components/SurveyNotFound";
import { TakeQuestion } from "../components/TakeQuestion";
import { useNewAnswers } from "../hooks/useNewAnswers";
import { SuccessSubmittedAnswersDialog } from "../components/dialogs/SuccessSubmittedAnwersDialog";

export function TakeSurvey() {
  const { t } = useTranslation("common");
  const { id } = useParams<{ id: string }>();
  const { survey, loading } = useSurveyById(Number(id));
  const {
    answers,
    isSubmitted,
    loadingAnswers,
    editTextAnswer,
    editRatingAnswer,
    editCheckboxAnswer,
    editMultipleChoiceAnswer,
    editRankingAnswer,
    submitAnswers,
  } = useNewAnswers(survey?.questions || []);

  if (loading || loadingAnswers) {
    return <Loading />;
  }

  if (isSubmitted) {
    return <SuccessSubmittedAnswersDialog />;
  }

  if (survey == null || !survey.isActive) {
    return <SurveyNotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-20 p-6">
      <div className="p-6 w-full md:w-3xl rounded-2xl border-2 shadow-lg">
        <header className="space-y-1 text-center">
          <h1 className="text-3xl font-semibold m-3">{survey.title}</h1>
          <p className="text-muted-foreground">{survey.description}</p>
        </header>
      </div>

      {survey.questions.map((q, index) => (
        <TakeQuestion
          key={q.id}
          question={q}
          answer={answers[index]}
          index={index}
          editTextAnswer={editTextAnswer}
          editRatingAnswer={editRatingAnswer}
          editCheckboxAnswer={editCheckboxAnswer}
          editRankingAnswer={editRankingAnswer}
          editMultipleChoiceAnswer={editMultipleChoiceAnswer}
        />
      ))}
      <button
        className="w-full bg-primary text-primary-foreground md:w-3xl rounded-md border-2 text-xl p-1 cursor-pointer"
        onClick={() => submitAnswers()}
      >
        {t("buttons.submit")}
      </button>
    </div>
  );
}

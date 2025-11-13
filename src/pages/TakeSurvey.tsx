import { useTranslation } from "react-i18next";
import { useSurveyById } from "../hooks/useSurvey";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { SurveyNotFound } from "../components/SurveyNotFound";
import { TakeQuestion } from "../components/TakeQuestion";

export function TakeSurvey() {
  const { t } = useTranslation("noPage");
  const { id } = useParams<{ id: string }>();
  const { survey, loading } = useSurveyById(Number(id));

  if (loading) {
    return <Loading />;
  }

  if (survey == null) {
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
        <TakeQuestion key={q.id} question={q} index={index} />
      ))}
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useSurveyResults } from "../hooks";
import { QuestionResult, SurveyNotFound, Loading } from "../components/";
import { ArrowLeft } from "lucide-react";

export function ResultPage() {
  const { t } = useTranslation("userDashboardPage");
  const { id } = useParams<{ id: string }>();
  const { survey, loading } = useSurveyResults(Number(id));

  if (loading) return <Loading />;

  if (survey == null) return <SurveyNotFound />;

  return (
    <div className=" flex flex-col items-center justify-center mt-20 mb-5 p-6">
      <Link to="/dashboard" className="absolute left-5 top-20">
        <button
          type="button"
          className="flex flex-row items-center border-2 text-md rounded-xl p-2 cursor-pointer bg-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("back")}
        </button>
      </Link>
      <div className="p-6 w-full md:w-3xl rounded-2xl border-2 shadow-lg">
        <header className="space-y-1 text-center">
          <h1 className="text-3xl font-semibold m-3">{survey.title}</h1>
          <p className="text-muted-foreground">{survey.description}</p>
        </header>
      </div>

      {survey.questions.map((q, index) => (
        <QuestionResult key={q.id} question={q} index={index} />
      ))}
    </div>
  );
}

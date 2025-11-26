import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useSurveyResults } from "../hooks";
import { QuestionResult, SurveyNotFound, Loading } from "../components/";

export function ResultPage() {
  const { t } = useTranslation("userDashboardPage");
  const { id } = useParams<{ id: string }>();
  const { survey, loading } = useSurveyResults(Number(id));

  if (loading) return <Loading />;

  if (survey == null) return <SurveyNotFound />;

  return (
    <div className=" flex flex-col items-center justify-center mt-20 mb-5 p-6">
      <Link
        to="/dashboard"
        className="absolute top-15 md:top-20 left-0 p-3 m-3 text-sm md:text-lg font-semibold rounded-2xl flex items-center border-2 border-muted-foreground shadow-2xl"
      >
        go back
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

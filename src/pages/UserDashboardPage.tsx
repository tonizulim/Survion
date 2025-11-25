import { BarChart3, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAllSurveys } from "../hooks/useAllSurveys";
import Loading from "../components/Loading";
import { SurveyCard } from "../components/SurveyCard";
import { DeleteSurveyDialog } from "../components/dialogs/DeleteSurveyDialog";

export function UserDashboardPage() {
  const { t } = useTranslation("userDashboardPage");
  const {
    surveys,
    loading,
    deleteSurvey,
    surveyToDelete,
    setSurveyToDelete,
    deactivate,
  } = useAllSurveys();

  if (loading) return <Loading />;

  if (surveyToDelete > 0) {
    return (
      <DeleteSurveyDialog
        deleteSurvey={deleteSurvey}
        setSurveyToDelete={setSurveyToDelete}
      />
    );
  }

  return (
    <div className="2xl:max-w-8/10 mx-auto ">
      <div className="flex flex-col justify-center min-h-[80vh] p-10 pt-20 gap-5">
        <div className="w-full flex flex-col items-center justify-between sm:flex-row">
          <div>
            <h1 className="text-5xl font-bold text-primary mb-4">
              {t("title")}
            </h1>
            <p>{t("description")}</p>
          </div>
          <Link to="/survey/new">
            <button className="text-md px-4 mt-3 bg-primary text-primary-foreground rounded-lg p-2 font-semibold flex items-center cursor-pointer gap-2">
              <Plus />
              {t("createSurvey")}
            </button>
          </Link>
        </div>

        {!surveys || surveys.length == 0 ? (
          <div className="border-dashed  min-h-[50vh] border-2 rounded-2xl pt-12 pb-12 text-center flex flex-col items-center justify-center">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-primary mb-4">
              {t("noSurveys")}
            </h1>
            <p className="text-muted-foreground mb-4">{t("getStarted")}</p>
            <Link to="/survey/new">
              <button className="text-md px-4 bg-primary text-primary-foreground rounded-lg p-2 font-semibold flex items-center cursor-pointer gap-2">
                <Plus />
                {t("create")}
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4 grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
            {surveys.map((s) => (
              <SurveyCard
                survey={s}
                setSurveyToDelete={setSurveyToDelete}
                deactivate={deactivate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

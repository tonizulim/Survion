import { BarChart3, Share2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { SurveyCardDropdown } from ".";
import type { SurveyCardProps } from "../types";
import { Link } from "react-router-dom";

export function SurveyCard({
  survey,
  setSurveyToDelete,
  deactivate,
  setShareSurveyId,
}: SurveyCardProps) {
  const { t } = useTranslation("surveyCard");

  return (
    <div className="p-6 w-full rounded-2xl border-2 shadow-lg gap-2">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">{survey.title}</h1>
          <p className="text-muted-foreground text-lg">{survey.description}</p>
        </div>
        <SurveyCardDropdown
          surveyId={survey.id || 0}
          setSurveyToDelete={setSurveyToDelete}
          deactivate={deactivate}
        />
      </div>

      <div className="flex justify-between text-muted-foreground">
        <p>{t("active")}:</p>
        <button
          className={twMerge(
            "text-sm p-1 bg-secondary text-secondary-foreground rounded-lg font-semibold flex items-center",
            survey.isActive && "bg-primary text-primary-foreground "
          )}
        >
          {survey.isActive ? t("actives.active") : t("actives.disabled")}
        </button>
      </div>

      <button
        disabled={!survey.isActive}
        onClick={() => setShareSurveyId(survey.id || 0)}
        className={twMerge(
          "flex flex-row justify-center mt-2 text-md px-4 hover:bg-secondary text-secondary-foreground rounded-lg border-secondary border-2 p-2 font-semibold cursor-pointer gap-2 w-full",
          !survey.isActive &&
            "text-muted-foreground hover:bg-transparent cursor-default"
        )}
      >
        <Share2 />
        {t("share")}
      </button>

      <Link to={`/survey/results/${survey.id}`}>
        <button className="flex flex-row justify-center mt-2 text-md px-4 hover:bg-secondary text-secondary-foreground rounded-lg border-secondary border-2 p-2 font-semibold cursor-pointer gap-2 w-full">
          <BarChart3 />
          {t("results")}
        </button>
      </Link>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function SurveyNotFound() {
  const { t } = useTranslation("surveyNotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-5">
      <h1 className="text-2xl font-semibold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground mb-6 max-w-md">{t("description")}</p>
      <Link to="/">
        <button className="bg-accent-foreground text-accent text-xl p-2 rounded-md cursor-pointer">
          {t("button")}
        </button>
      </Link>
    </div>
  );
}

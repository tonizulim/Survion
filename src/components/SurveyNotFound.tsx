import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function SurveyNotFound() {
  const { t } = useTranslation("noPage");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-5">
      <h1 className="text-2xl font-semibold mb-2">Survey not found</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        This survey does not exist or has been removed
      </p>
      <Link to="/">
        <button className="bg-accent-foreground text-accent text-xl p-2 rounded-md cursor-pointer">
          {t("button")}
        </button>
      </Link>
    </div>
  );
}

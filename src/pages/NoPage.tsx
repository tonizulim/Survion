import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function NoPage() {
  const { t } = useTranslation("noPage");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-5">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">{t("title")}</h2>
      <p className="text-muted-foreground mb-6 max-w-md">{t("text")}</p>
      <Link to="/">
        <button className="bg-accent-foreground text-accent text-2xl p-2 rounded-md cursor-pointer">
          {t("button")}
        </button>
      </Link>
    </div>
  );
}

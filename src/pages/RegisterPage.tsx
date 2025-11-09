import { BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const { t } = useTranslation("registerPage");
  const { t: tCommon } = useTranslation("common");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex items-center justify-center md:max-w-md md:rounded-2xl border-2 shadow-2xl">
        <div className="w-full max-w-md p-6">
          <header className="space-y-1 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BarChart3 className="h-7 w-7 text-primary" />
              <span className="text-2xl font-bold">Survion</span>
            </div>
            <h1 className="text-3xl font-semibold m-3">{t("title")}</h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </header>
          <div>
            <form className="space-y-4">
              <div className="space-y-2 flex flex-col mt-3">
                <label htmlFor="email" className="font-semibold">
                  {t("email")}
                </label>
                <input
                  className="border-2 rounded-md border-accent p-2"
                  id="email"
                  type="text"
                  placeholder={t("emailPlaceholder")}
                />
              </div>
              <div className="space-y-2 flex flex-col mt-3">
                <label htmlFor="password" className="font-semibold">
                  {t("password")}
                </label>
                <input
                  className="border-2 rounded-md border-accent p-2"
                  id="password"
                  type="password"
                  placeholder={t("passwordPlaceholder")}
                />
              </div>
              <div className="space-y-2 flex flex-col mt-3">
                <label htmlFor="password" className="font-semibold">
                  {t("confirmPassword")}
                </label>
                <input
                  className="border-2 rounded-md border-accent p-2"
                  id="password"
                  type="password"
                  placeholder={t("confirmPasswordPlaceholder")}
                />
              </div>
              <button className="w-full bg-primary text-secondary rounded-md p-2">
                {tCommon("buttons.singUp")}
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                {t("haveAccount") + " "}
              </span>
              <Link
                to="/login"
                className="text-primary hover:underline font-medium"
              >
                {tCommon("buttons.logIn")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

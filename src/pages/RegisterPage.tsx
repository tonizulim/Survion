import { BarChart3 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { RegisterCredentials } from "../types/credentials";
import { handleRegister } from "../utils/userUtils";
import { SuccessRegistrationDialog } from "../components/dialogs/SuccessRegistrationDialog";
import Loading from "../components/Loading";

export function RegisterPage() {
  const { t } = useTranslation("registerPage");
  const { t: tCommon } = useTranslation("common");

  const [credentials, setCredentials] = useState<RegisterCredentials>({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [successRegistration, setSuccessRegistration] = useState(false);
  const [error, setError] = useState("");
  const user = {
    email: "",
    isApproved: false,
    isEmailVerified: false,
    isAdmin: false,
  };

  if (loading) {
    return <Loading />;
  }

  if (successRegistration) {
    return (
      <SuccessRegistrationDialog user={{ ...user, email: credentials.email }} />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full p-6 sm:max-w-sm sm:rounded-2xl sm:border-2 sm:shadow-2xl">
        <header className="space-y-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BarChart3 className="h-7 w-7 text-primary" />
            <span className="text-2xl font-bold">Survion</span>
          </div>
          <h1 className="text-3xl font-semibold m-3">{t("title")}</h1>
          <p className="text-muted-foreground">{t("description")}</p>
        </header>
        <div>
          {error && <p className="mt-1 text-destructive">{error}</p>}
          <form
            className="space-y-4"
            onSubmit={(e) =>
              handleRegister({
                e,
                credentials,
                setLoading,
                setError,
                setSuccessRegistration,
              })
            }
          >
            <div className="space-y-2 flex flex-col mt-3">
              <label htmlFor="email" className="font-semibold">
                {t("email")}
              </label>
              <input
                className="border-2 rounded-md border-accent p-2"
                id="email"
                type="text"
                placeholder={t("emailPlaceholder")}
                value={credentials.email}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
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
                value={credentials.password}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
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
                value={credentials.repeatPassword}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    repeatPassword: e.target.value,
                  }))
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-secondary rounded-md p-2"
              disabled={loading}
            >
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
  );
}

import { CheckCircle2 } from "lucide-react";
import type { SuccessRegistrationDialogProps } from "../../types";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function SuccessRegistrationDialog({
  user,
}: SuccessRegistrationDialogProps) {
  const { t } = useTranslation("successRegistrationDialog");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full p-6 sm:max-w-sm sm:rounded-2xl sm:border-2 sm:shadow-2xl">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold">{t("title")}</h1>
          <p className="text-muted-foreground my-3">
            {!user.isEmailVerified && t("emailVerify")}
            {!user.isApproved && t("adminVerify")}{" "}
          </p>
        </div>
        <div>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 text-sm">
              <CheckCircle2
                className={twMerge(
                  "h-5 w-5 text-muted-foreground mt-0.5 shrink-0",
                  user.isEmailVerified && "text-green-600 dark:text-green-400"
                )}
              />
              <div>
                <p className="font-medium">{t("step1")}</p>
                <p className="text-muted-foreground">
                  {!user.isEmailVerified
                    ? t("step1Description") + user.email
                    : t("done")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <CheckCircle2
                className={twMerge(
                  "h-5 w-5 text-muted-foreground mt-0.5 shrink-0",
                  user.isApproved && "text-green-600 dark:text-green-400"
                )}
              />
              <div>
                <p className="font-medium">{t("step2")}</p>
                <p className="text-muted-foreground">
                  {!user.isApproved ? t("step2Description") : t("done")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <CheckCircle2
                className={twMerge(
                  "h-5 w-5 text-muted-foreground mt-0.5 shrink-0",
                  user.isApproved &&
                    user.isEmailVerified &&
                    "text-green-600 dark:text-green-400"
                )}
              />
              <div>
                <p className="font-medium">{t("step3")}</p>
                <p className="text-muted-foreground">{t("step3Description")}</p>
              </div>
            </div>
          </div>

          <Link to="/login" className="flex justify-center">
            <button
              disabled={!user.isApproved || !user.isEmailVerified}
              className={twMerge(
                "gap-2 text-lg px-3 p-2 size bg-primary text-primary-foreground rounded-md font-semibold cursor-pointer w-full",
                !user.isApproved &&
                  "bg-accent text-accent-foreground cursor-default"
              )}
            >
              {t("loginBtn")}
            </button>
          </Link>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground"> {t("altOption")}</span>
            <Link to="/" className="text-primary hover:underline font-medium">
              {t("altOptionBtn")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

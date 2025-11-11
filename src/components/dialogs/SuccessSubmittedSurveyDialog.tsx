import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { SuccessSubmittedSurveyDialogProps } from "../../types/SuccessSubmittedSurveyDialogProps";

export function SuccessSubmittedSurveyDialog({
  title,
}: SuccessSubmittedSurveyDialogProps) {
  const { t } = useTranslation("successSubmittedSurveyDialog");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="sm:min-w-sm p-6 max-w-md rounded-2xl border-2 shadow-2xl m-5">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold">
            {t("title")} {title}
          </h1>
          <p className="text-muted-foreground my-3"></p>
        </div>

        <Link to="/user" className="flex justify-center">
          <button className="gap-2 text-lg px-3 p-2 size bg-primary text-primary-foreground rounded-md font-semibold cursor-pointer w-full">
            {t("goToDashboard")}
          </button>
        </Link>

        <button className="mt-3 text-lg px-3 p-2 size bg-secondary text-secondary-foreground rounded-md font-semibold cursor-pointer w-full">
          {t("shareSurvey")}
        </button>
      </div>
    </div>
  );
}

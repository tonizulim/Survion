import { CircleX } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { DeleteSurveyDialogProps } from "../../types";

export function DeleteSurveyDialog({
  deleteSurvey,
  setSurveyToDelete,
}: DeleteSurveyDialogProps) {
  const { t } = useTranslation("deleteSurveyDialog");

  return (
    <div className="absolute min-h-screen w-full flex items-center justify-center">
      <div className="relative top-0 m:min-w-sm p-6 max-w-md rounded-2xl border-2 shadow-2xl m-5">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-red-100 dark:bg-green-900/20 flex items-center justify-center">
              <CircleX className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold">{t("title")}</h1>
        </div>

        <button
          className="gap-2 text-lg px-3 p-2 size bg-primary text-primary-foreground rounded-md font-semibold cursor-pointer w-full"
          onClick={() => deleteSurvey()}
        >
          {t("delete")}
        </button>

        <button
          className="mt-3 text-lg px-3 p-2 size bg-secondary text-secondary-foreground rounded-md font-semibold cursor-pointer w-full"
          onClick={() => setSurveyToDelete(0)}
        >
          {t("cancel")}
        </button>
      </div>
    </div>
  );
}

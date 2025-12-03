import { useTranslation } from "react-i18next";
import type { ShareSurveyDialogProps } from "../../types";
import { Copy, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export function ShareSurveyDialog({
  shareSurveyId,
  setShareSurveyId,
}: ShareSurveyDialogProps) {
  const { t } = useTranslation("shareSurveyDialog");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const qrCodeValue = `${baseUrl}/survey/take/${shareSurveyId}`;
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setShareSurveyId(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="absolute min-h-screen w-full flex items-center justify-center">
      <div
        ref={dialogRef}
        className="relative m:min-w-sm p-6 max-w-md rounded-2xl border-2 shadow-2xl m-5"
      >
        <X
          className="absolute right-3 top-3 cursor-pointer  h-6 w-6 rounded bg-muted border-2 border-muted shadow-2xl"
          onClick={() => setShareSurveyId(-1)}
        />
        <div>
          <h1 className="text-3xl font-semibold">{t("title")}</h1>
          <p className="text-muted-foreground my-3">{t("description")}</p>
        </div>
        <h1 className="text-xl font-semibold">{t("scanMe")}</h1>

        <QRCodeCanvas className="m-3 mx-auto" value={qrCodeValue} size={250} />

        <h1 className="text-xl font-semibold">{t("copyLink")}</h1>
        <div className="flex flex-row items-center gap-4">
          <input
            className="w-full border-2 rounded-md border-accent p-2"
            id="email"
            type="text"
            value={
              import.meta.env.VITE_BASE_URL + `/survey/take/${shareSurveyId}`
            }
          />
          <Copy
            className="bg-primary w-10 h-10 p-2 rounded-md text-primary-foreground cursor-pointer"
            onClick={() => {
              const url =
                import.meta.env.VITE_BASE_URL + `/survey/take/${shareSurveyId}`;

              if (navigator.share) {
                navigator.share({
                  title: "Share survey",
                  text: "Please fill out this survey:",
                  url: url,
                });
              } else {
                navigator.clipboard.writeText(url);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

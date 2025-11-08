import { useTranslation } from "react-i18next";

export function HomePage() {
  const { t } = useTranslation("home");

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-balance">
          {t("title")}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          {t("description")}
        </p>
      </section>

      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{t("footer")}</p>
        </div>
      </footer>
    </div>
  );
}

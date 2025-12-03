import { BarChart3, CheckCircle2, Clock, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Feature } from "../types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { apiClient } from "../services";

export function HomePage() {
  const { t } = useTranslation("home");

  const features = t("features", { returnObjects: true }) as Feature[];
  const icons = [CheckCircle2, BarChart3, Shield, Clock];

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/auth/authorize");
      console.log(response.data);
    } catch (error) {
      console.error("Failed to authorize:", error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      <section className="container mx-auto px-4 py-20 mt-30 text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-6 text-balance">
          {t("title")}
        </h1>
        <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          {t("description")}
        </p>
        <button onClick={() => fetchData()}>testme</button>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t("subtitle")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="p-6 border-2 shadow-2xl rounded-2xl">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto text-center mt-30">
        <div className="max-w-3xl mx-auto bg-primary text-primary-foreground pt-12 pb-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-lg mb-6 opacity-90">{t("cta.description")}</p>
          <Link to="/register">
            <button className="text-lg px-8 bg-secondary text-secondary-foreground rounded-lg p-2 font-bold ">
              {t("cta.button")}
            </button>
          </Link>
        </div>
      </section>

      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{t("footer")}</p>
        </div>
      </footer>
    </div>
  );
}

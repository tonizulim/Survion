import { useEffect, useState } from "react";
import type { Survey } from "../types";
import { handleFetchSurveyResults } from "../utils";

export function useSurveyResults(surveyId: number) {
  const [loading, setLoading] = useState(true);

  const [survey, setSurvey] = useState<Survey | null>(null);

  useEffect(() => {
    handleFetchSurveyResults({ setLoading, setSurvey, surveyId });
  }, []);

  return {
    survey,
    loading,
    setLoading,
  };
}

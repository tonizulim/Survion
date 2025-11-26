import { useEffect, useState } from "react";
import type { Survey } from "../types/Survey";
import { handleFetchSurveyResults } from "../utils/surveyUtils";

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

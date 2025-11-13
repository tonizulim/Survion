import { useEffect, useState } from "react";
import type { Survey } from "../types/Survey";
import { handleFetchSurvey } from "../utils/surveyUtils";

export function useSurveyById(id: number) {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchSurvey({ setLoading, setSurvey, id });
  }, []);

  return { loading, survey, setSurvey };
}

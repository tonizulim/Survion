import { useEffect, useState } from "react";
import type { Survey } from "../types";
import { handleFetchSurvey } from "../utils";

export function useSurveyById(id: number) {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchSurvey({ setLoading, setSurvey, id });
  }, []);

  return { loading, survey, setSurvey };
}

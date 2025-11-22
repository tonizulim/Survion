import { useEffect, useState } from "react";
import type { Survey } from "../types/Survey";
import { handleFetchAllSurveys } from "../utils/surveyUtils";

export function useAllSurveys(userId?: number) {
  const [surveys, setSurveys] = useState<Survey[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchAllSurveys({ setLoading, setSurveys, userId });
  }, []);

  const deactivate = () => {};

  return { loading, surveys, setSurveys, deactivate };
}

import { useEffect, useState } from "react";
import type { Survey } from "../types/Survey";
import {
  handleDeactivateSurvey,
  handleDeleteSurvey,
  handleFetchAllSurveys,
} from "../utils/surveyUtils";
import type { DeactivateProps } from "../types/useAllSurveysProps";

export function useAllSurveys(userId?: number) {
  const [surveys, setSurveys] = useState<Survey[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [surveyToDelete, setSurveyToDelete] = useState(0);

  useEffect(() => {
    handleFetchAllSurveys({ setLoading, setSurveys, userId });
  }, []);

  const deactivate = async ({ surveyId }: DeactivateProps) => {
    if (surveys == null) return;
    var status = await handleDeactivateSurvey({
      surveyId,
      setLoading,
    });
    if (status) {
      setSurveys((prev) => {
        var updatedSurveys = [...(prev ?? [])];
        updatedSurveys = updatedSurveys.map((s) =>
          s.id == surveyId ? { ...s, isActive: false } : s
        );
        return updatedSurveys || null;
      });
    }
  };

  const deleteSurvey = async () => {
    var status = await handleDeleteSurvey({
      surveyId: surveyToDelete,
      setLoading,
    });
    if (status) {
      setSurveys((prev) => prev?.filter((s) => s.id != surveyToDelete) || null);
    }
    setSurveyToDelete(-10);
  };

  return {
    loading,
    surveys,
    surveyToDelete,
    setSurveyToDelete,
    setSurveys,
    deactivate,
    deleteSurvey,
  };
}

import axiosInstance from "./axiosInstance";

import { AnalysisResponse } from "@/types/analysis.types";

export const generateAnalysis = (resumeId: string) => {
  return axiosInstance.post<AnalysisResponse>(`/analysis/resume/${resumeId}`);
};

export const getAnalyses = () => {
  return axiosInstance.get("/analysis");
};

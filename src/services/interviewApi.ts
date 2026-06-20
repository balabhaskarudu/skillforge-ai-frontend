import axiosInstance from "./axiosInstance";
import { InterviewResponse } from "@/types/interview.types";

export const generateQuestions = (roadmapId: string) => {
  return axiosInstance.post<InterviewResponse>(
    `/interviews/generate/${roadmapId}`,
  );
};

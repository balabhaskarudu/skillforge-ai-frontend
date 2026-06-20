import axiosInstance from "./axiosInstance";
import { RoadmapResponse } from "@/types/roadmap.types";

export const generateRoadmap = (analysisId: string) => {
  return axiosInstance.post<RoadmapResponse>(
    `/roadmaps/generate/${analysisId}`,
  );
};

export const getRoadmaps = () => {
  return axiosInstance.get("/roadmaps");
};

export const getRoadmapById = (roadmapId: string) => {
  return axiosInstance.get(`/roadmaps/${roadmapId}`);
};

export interface Analysis {
  _id: string;
  userId: string;
  resumeId: string;
  strengths: string[];
  skillGaps: string[];
  recommendations: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AnalysisResponse {
  success: boolean;
  message?: string;
  data: Analysis;
}

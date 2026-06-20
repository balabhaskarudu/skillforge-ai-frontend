export interface RoadmapWeek {
  _id: string;
  week: number;
  topic: string;
  tasks: string[];
}

export interface Roadmap {
  _id: string;
  userId: string;
  analysisId: string;
  title: string;
  roadmap: RoadmapWeek[];
  createdAt: string;
  updatedAt: string;
}

export interface RoadmapResponse {
  success: boolean;
  message?: string;
  data: Roadmap;
}

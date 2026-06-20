export interface Interview {
  _id: string;
  userId: string;
  roadmapId: string;
  easyQuestions: string[];
  mediumQuestions: string[];
  hardQuestions: string[];
  createdAt: string;
  updatedAt: string;
}

export interface InterviewResponse {
  success: boolean;
  message?: string;
  data: Interview;
}

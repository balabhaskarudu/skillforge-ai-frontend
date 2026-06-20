export interface Resume {
  _id: string;
  userId: string;
  originalFileName: string;
  filePath: string;
  extractedText: string;
  uploadStatus: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResumeResponse {
  success: boolean;
  data: Resume[];
}

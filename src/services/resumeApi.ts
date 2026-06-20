import axiosInstance from "./axiosInstance";
import { ResumeResponse } from "@/types/resume.types";

export const uploadResume = (
  formData: FormData
) => {
  return axiosInstance.post(
    "/resumes/upload",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};

export const getResumes = () => {
  return axiosInstance.get<ResumeResponse>(
    "/resumes"
  );
};
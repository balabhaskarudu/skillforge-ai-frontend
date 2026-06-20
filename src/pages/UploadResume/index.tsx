import { useEffect, useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import UploadZone from "@/components/upload/UploadZone";

import ResumeCard from "@/components/upload/ResumeCard";

import { getResumes, uploadResume } from "@/services/resumeApi";

import { Resume } from "@/types/resume.types";

function UploadResume() {
  const [resumes, setResumes] = useState<Resume[]>([]);

  const [loading, setLoading] = useState(false);

  const loadResumes = async () => {
    try {
      const response = await getResumes();

      console.log(response.data);

      if (response.data.data) {
        setResumes(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchResumes = async () => {
      const response = await getResumes();
      console.log(response.data);
      setResumes(response.data.data);
    };

    fetchResumes();
  }, []);

  const handleFile = async (file: File) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      const response = await uploadResume(formData);

      localStorage.setItem("resumeId", response.data.data._id);

      await loadResumes();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="
            text-4xl
            font-bold
            "
          >
            Upload Resume
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            Upload your resume and let AI analyze your skills.
          </p>
        </div>

        <UploadZone onFileSelect={handleFile} />

        {loading && (
          <div
            className="
            rounded-xl
            bg-white
            p-6
            text-center
            shadow-md
            "
          >
            Uploading Resume...
          </div>
        )}

        <div>
          <h2
            className="
            mb-5
            text-2xl
            font-bold
            "
          >
            Recent Uploads
          </h2>

          {resumes.length === 0 ? (
            <div
              className="
              rounded-xl
              bg-white
              p-8
              text-center
              text-slate-500
              shadow-md
              "
            >
              No resumes uploaded yet.
            </div>
          ) : (
            <div
              className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
              "
            >
              {resumes.map((resume) => (
                <ResumeCard key={resume._id} resume={resume} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UploadResume;

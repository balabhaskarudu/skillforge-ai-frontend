import { Resume } from "@/types/resume.types";

interface Props {
  resume: Resume;
}

function ResumeCard({ resume }: Props) {
  return (
    <div
      className="
      rounded-2xl
      bg-white
      p-6
      shadow-md
      "
    >
      <h2
        className="
        text-lg
        font-semibold
        "
      >
        {resume.originalFileName}
      </h2>

      <p
        className="
        mt-2
        text-sm
        text-slate-500
        "
      >
        Status: {resume.uploadStatus}
      </p>

      <p
        className="
        mt-2
        text-sm
        text-slate-500
        "
      >
        Uploaded: {new Date(resume.createdAt).toLocaleString()}
      </p>
    </div>
  );
}

export default ResumeCard;

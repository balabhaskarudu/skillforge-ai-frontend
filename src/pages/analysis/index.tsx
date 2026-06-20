import { useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import AnalysisCard from "@/components/analysis/AnalysisCard";

import { generateAnalysis } from "@/services/analysisApi";

import { Analysis } from "@/types/analysis.types";

function AnalysisPage() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      const resumeId = localStorage.getItem("resumeId");

      if (!resumeId) {
        alert("Upload a resume first.");
        return;
      }

      setLoading(true);

      const response = await generateAnalysis(resumeId);

      setAnalysis(response.data.data);
      localStorage.setItem("analysisId", response.data.data._id);
    } catch (error) {
      console.log(error);

      alert("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div
          className="
          flex
          items-center
          justify-between
          "
        >
          <h1
            className="
            text-4xl
            font-bold
            "
          >
            Resume Analysis
          </h1>

          <button
            onClick={handleGenerate}
            className="
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            text-white
            "
          >
            {loading ? "Generating..." : "Generate Analysis"}
          </button>
        </div>

        {analysis && (
          <div className="space-y-8">
            <AnalysisCard title="Strengths" items={analysis.strengths} />

            <AnalysisCard title="Skill Gaps" items={analysis.skillGaps} />

            <AnalysisCard
              title="Recommendations"
              items={analysis.recommendations}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default AnalysisPage;

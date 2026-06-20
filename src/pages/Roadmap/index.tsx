import { useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import { generateRoadmap } from "@/services/roadmapApi";

import { Roadmap } from "@/types/roadmap.types";

import WeekCard from "@/components/roadmap/WeekCard";

function RoadmapPage() {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      const analysisId = localStorage.getItem("analysisId");

      if (!analysisId) {
        alert("Generate Analysis first.");
        return;
      }

      setLoading(true);

      const response = await generateRoadmap(analysisId);

      setRoadmap(response.data.data);

      localStorage.setItem("roadmapId", response.data.data._id);
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
            Learning Roadmap
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
            {loading ? "Generating..." : "Generate Roadmap"}
          </button>
        </div>

        {roadmap && (
          <>
            <h2
              className="
              text-2xl
              font-semibold
              "
            >
              {roadmap.title}
            </h2>

            <div
              className="
              space-y-6
              "
            >
              {roadmap.roadmap.map((week) => (
                <WeekCard key={week._id} week={week} />
              ))}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default RoadmapPage;

import { useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import QuestionTabs from "@/components/interview/QuestionTabs";
import SearchBar from "@/components/interview/SearchBar";
import QuestionCard from "@/components/interview/QuestionCard";
import ProgressCard from "@/components/interview/ProgressCard";

import { generateQuestions } from "@/services/interviewApi";

import { Interview } from "@/types/interview.types";

function InterviewQuestions() {
  const [interview, setInterview] = useState<Interview | null>(null);

  const [activeTab, setActiveTab] = useState("easy");

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      const roadmapId = localStorage.getItem("roadmapId");

      if (!roadmapId) {
        alert("Generate Roadmap First.");
        return;
      }

      setLoading(true);

      const response = await generateQuestions(roadmapId);

      setInterview(response.data.data);
    } catch (error) {
      console.log(error);

      alert("Failed to generate questions.");
    } finally {
      setLoading(false);
    }
  };

  let questions: string[] = [];

  if (interview && activeTab === "easy") {
    questions = interview.easyQuestions;
  }

  if (interview && activeTab === "medium") {
    questions = interview.mediumQuestions;
  }

  if (interview && activeTab === "hard") {
    questions = interview.hardQuestions;
  }

  const filteredQuestions = questions.filter((question) =>
    question.toLowerCase().includes(search.toLowerCase()),
  );

  const totalQuestions = interview
    ? interview.easyQuestions.length +
      interview.mediumQuestions.length +
      interview.hardQuestions.length
    : 0;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}

        <div
          className="
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-center
          md:justify-between
          "
        >
          <div>
            <h1
              className="
              text-4xl
              font-bold
              "
            >
              Interview Preparation
            </h1>

            <p
              className="
              mt-2
              text-slate-500
              "
            >
              Generate AI-powered interview questions based on your learning
              roadmap.
            </p>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-indigo-700
            disabled:opacity-50
            "
          >
            {loading ? "Generating..." : "Generate Questions"}
          </button>
        </div>

        {/* Progress */}

        {interview && <ProgressCard completed={0} total={totalQuestions} />}

        {/* Tabs */}

        {interview && (
          <QuestionTabs active={activeTab} setActive={setActiveTab} />
        )}

        {/* Search */}

        {interview && <SearchBar value={search} onChange={setSearch} />}

        {/* Empty State */}

        {!interview && !loading && (
          <div
            className="
              flex
              h-96
              items-center
              justify-center
              rounded-3xl
              bg-white
              shadow-md
              "
          >
            <div
              className="
                text-center
                "
            >
              <h2
                className="
                  text-2xl
                  font-bold
                  "
              >
                No Interview Questions Yet
              </h2>

              <p
                className="
                  mt-3
                  text-slate-500
                  "
              >
                Generate your roadmap and click Generate Questions.
              </p>
            </div>
          </div>
        )}

        {/* Questions */}

        <div
          className="
          space-y-5
          "
        >
          {filteredQuestions.map((question, index) => (
            <QuestionCard key={index} question={`${index + 1}. ${question}`} />
          ))}
        </div>

        {/* No Search Results */}

        {interview && filteredQuestions.length === 0 && (
          <div
            className="
              rounded-2xl
              bg-white
              p-10
              text-center
              shadow-md
              "
          >
            <h2
              className="
                text-xl
                font-semibold
                "
            >
              No Questions Found
            </h2>

            <p
              className="
                mt-2
                text-slate-500
                "
            >
              Try another search keyword.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default InterviewQuestions;

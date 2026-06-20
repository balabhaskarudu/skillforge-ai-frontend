import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-3xl font-bold">Quick Actions</h2>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/upload")}
          className="
          rounded-xl
          bg-indigo-600
          px-6
          py-3
          text-white
          "
        >
          Upload Resume
        </button>

        <button
          onClick={() => navigate("/analysis")}
          className="
          rounded-xl
          bg-purple-600
          px-6
          py-3
          text-white
          "
        >
          Generate Analysis
        </button>

        <button
          onClick={() => navigate("/roadmaps")}
          className="
          rounded-xl
          bg-cyan-600
          px-6
          py-3
          text-white
          "
        >
          Roadmaps
        </button>

        <button
          onClick={() => navigate("/interviews")}
          className="
          rounded-xl
          bg-green-600
          px-6
          py-3
          text-white
          "
        >
          Interviews
        </button>
      </div>
    </div>
  );
}

export default QuickActions;

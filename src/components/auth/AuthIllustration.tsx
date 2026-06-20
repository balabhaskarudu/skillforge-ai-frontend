import {
  FaRobot,
  FaFileAlt,
  FaRoad,
} from "react-icons/fa";

function AuthIllustration() {
  return (
    <div
      className="
      hidden
      lg:flex
      flex-1
      flex-col
      items-center
      justify-center
      gap-10
      bg-gradient-to-br
      from-indigo-600
      via-purple-600
      to-cyan-500
      text-white
      "
    >
      <FaRobot size={80} />

      <h1 className="text-5xl font-bold">
        SkillForge AI
      </h1>

      <div className="space-y-6 text-center">
        <p className="flex items-center gap-3">
          <FaFileAlt />
          Resume Analysis
        </p>

        <p className="flex items-center gap-3">
          <FaRoad />
          Personalized Roadmaps
        </p>
      </div>
    </div>
  );
}

export default AuthIllustration;
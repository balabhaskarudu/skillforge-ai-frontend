import {
  FaHome,
  FaFileUpload,
  FaChartBar,
  FaRoad,
  FaQuestionCircle,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    title: "Upload Resume",
    icon: <FaFileUpload />,
    path: "/upload-resume",
  },
  {
    title: "Analysis",
    icon: <FaChartBar />,
    path: "/analysis",
  },
  {
    title: "Roadmaps",
    icon: <FaRoad />,
    path: "/roadmaps",
  },
  {
    title: "Interviews",
    icon: <FaQuestionCircle />,
    path: "/interviews",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside
      className="
      hidden
      md:flex
      w-64
      flex-col
      border-r
      bg-white
      p-6
      "
    >
      <h1
        className="
        mb-10
        text-3xl
        font-bold
        text-indigo-600
        "
      >
        SkillForge AI
      </h1>

      <div className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="
      flex
      items-center
      gap-4
      rounded-xl
      p-4
      hover:bg-slate-100
    "
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

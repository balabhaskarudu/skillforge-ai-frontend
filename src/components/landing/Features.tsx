import {
  FaFileAlt,
  FaBrain,
  FaRoad,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    title: "Resume Analyzer",
    icon: <FaFileAlt size={40} />,
  },
  {
    title: "Skill Gap Detection",
    icon: <FaBrain size={40} />,
  },
  {
    title: "Personalized Roadmaps",
    icon: <FaRoad size={40} />,
  },
  {
    title: "Interview Preparation",
    icon: <FaLaptopCode size={40} />,
  },
  {
    title: "Progress Dashboard",
    icon: <FaChartLine size={40} />,
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Features
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 text-indigo-600">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;
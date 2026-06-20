import { RoadmapWeek } from "@/types/roadmap.types";

interface Props {
  week: RoadmapWeek;
}

function WeekCard({ week }: Props) {
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
        text-xl
        font-bold
        text-indigo-600
        "
      >
        Week {week.week}
      </h2>

      <h3
        className="
        mt-2
        text-lg
        font-semibold
        "
      >
        {week.topic}
      </h3>

      <ul
        className="
        mt-5
        list-disc
        space-y-2
        pl-5
        "
      >
        {week.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default WeekCard;

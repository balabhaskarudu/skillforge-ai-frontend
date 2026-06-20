interface Props {
  completed: number;
  total: number;
}

function ProgressCard({ completed, total }: Props) {
  const percentage = Math.round((completed / total) * 100);

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
        text-2xl
        font-bold
        "
      >
        Progress
      </h2>

      <div
        className="
        mt-5
        h-4
        rounded-full
        bg-slate-200
        "
      >
        <div
          style={{
            width: `${percentage}%`,
          }}
          className="
          h-full
          rounded-full
          bg-indigo-600
          "
        />
      </div>

      <p className="mt-4">
        {completed}/{total} Completed
      </p>
    </div>
  );
}

export default ProgressCard;

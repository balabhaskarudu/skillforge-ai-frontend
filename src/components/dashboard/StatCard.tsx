interface Props {
  title: string;
  count: number;
}

function StatCard({
  title,
  count,
}: Props) {
  return (
    <div
      className="
      rounded-2xl
      bg-white
      p-6
      shadow-md
      "
    >
      <h3
        className="
        text-slate-500
        "
      >
        {title}
      </h3>

      <h1
        className="
        mt-3
        text-4xl
        font-bold
        "
      >
        {count}
      </h1>
    </div>
  );
}

export default StatCard;
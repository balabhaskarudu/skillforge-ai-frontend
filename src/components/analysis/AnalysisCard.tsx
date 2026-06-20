interface Props {
  title: string;
  items: string[];
}

function AnalysisCard({ title, items }: Props) {
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
        mb-5
        text-2xl
        font-bold
        "
      >
        {title}
      </h2>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="
              rounded-lg
              bg-slate-50
              p-4
              "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnalysisCard;

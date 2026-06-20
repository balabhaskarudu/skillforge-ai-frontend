interface Props {
  active: string;
  setActive: (tab: string) => void;
}

function QuestionTabs({ active, setActive }: Props) {
  const tabs = ["easy", "medium", "hard"];

  return (
    <div
      className="
      flex
      gap-4
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`
            rounded-xl
            px-6
            py-3
            capitalize
            ${active === tab ? "bg-indigo-600 text-white" : "bg-white"}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default QuestionTabs;

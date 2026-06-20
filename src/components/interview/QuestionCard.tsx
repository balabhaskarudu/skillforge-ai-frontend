import { useState } from "react";

import { FaCheck, FaCopy } from "react-icons/fa";

interface Props {
  question: string;
}

function QuestionCard({ question }: Props) {
  const [done, setDone] = useState(false);

  const copyQuestion = () => {
    navigator.clipboard.writeText(question);
  };

  return (
    <div
      className="
      rounded-2xl
      bg-white
      p-6
      shadow-md
      "
    >
      <p
        className="
        text-lg
        "
      >
        {question}
      </p>

      <div
        className="
        mt-6
        flex
        gap-4
        "
      >
        <button
          onClick={copyQuestion}
          className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-indigo-600
          px-4
          py-2
          text-white
          "
        >
          <FaCopy />
          Copy
        </button>

        <button
          onClick={() => setDone(!done)}
          className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-green-600
          px-4
          py-2
          text-white
          "
        >
          <FaCheck />

          {done ? "Completed" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;

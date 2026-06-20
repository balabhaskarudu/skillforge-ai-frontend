function RecentActivity() {
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
        Recent Activity
      </h2>

      <ul className="space-y-4">
        <li>
          Resume Uploaded
        </li>

        <li>
          Analysis Generated
        </li>

        <li>
          Roadmap Created
        </li>
      </ul>
    </div>
  );
}

export default RecentActivity;
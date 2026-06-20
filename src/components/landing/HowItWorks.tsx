const steps = [
  "Upload Resume",
  "AI Analysis",
  "Learning Roadmap",
  "Interview Preparation",
];

function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-20 text-center text-5xl font-bold">
          How It Works
        </h2>

        <div className="grid gap-8 md:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md"
            >
              <div className="mb-5 text-5xl font-bold text-indigo-600">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
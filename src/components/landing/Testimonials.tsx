function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            "This platform completely changed my preparation strategy."
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            "The roadmap feature is incredibly useful."
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            "Feels like having an AI mentor."
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="mb-6 text-6xl font-bold leading-tight">
            AI-Powered Career Coach
            <br />
            for Developers
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl text-slate-600">
            Upload your resume, identify skill gaps,
            generate learning roadmaps, and prepare
            for interviews with AI.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/register"
              className="rounded-xl bg-indigo-600 px-8 py-4 text-lg text-white shadow-lg"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-lg"
            >
              Explore Features
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
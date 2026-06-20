import { Link } from "react-router-dom";

function LandingNavbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          SkillForge AI
        </Link>

        <div className="hidden gap-8 md:flex">
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="rounded-lg px-5 py-2 font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;
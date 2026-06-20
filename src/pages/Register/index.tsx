import AuthIllustration
  from "@/components/auth/AuthIllustration";

import RegisterForm
  from "@/components/auth/RegisterForm";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="
      flex
      min-h-screen
      bg-slate-100
      "
    >
      <AuthIllustration />

      <div
        className="
        flex
        flex-1
        items-center
        justify-center
        p-6
        "
      >
        <div
          className="
          w-full
          max-w-md
          rounded-3xl
          bg-white/70
          p-10
          shadow-2xl
          backdrop-blur-lg
          "
        >
          <h1
            className="
            mb-2
            text-4xl
            font-bold
            "
          >
            Create Account
          </h1>

          <p
            className="
            mb-8
            text-slate-500
            "
          >
            Start your AI career journey.
          </p>

          <RegisterForm />

          <p
            className="
            mt-6
            text-center
            "
          >
            Already have an account?

            <Link
              to="/login"
              className="
              ml-2
              font-semibold
              text-indigo-600
              "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
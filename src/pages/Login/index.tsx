import {
  Link,
} from "react-router-dom";

import LoginForm
  from "@/components/auth/LoginForm";

import AuthIllustration
  from "@/components/auth/AuthIllustration";

function Login() {
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
            Welcome Back
          </h1>

          <p
            className="
            mb-8
            text-slate-500
            "
          >
            Login to SkillForge AI
          </p>

          <LoginForm />

          <p
            className="
            mt-6
            text-center
            "
          >
            Don't have an account?

            <Link
              to="/register"
              className="
              ml-2
              font-semibold
              text-indigo-600
              "
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
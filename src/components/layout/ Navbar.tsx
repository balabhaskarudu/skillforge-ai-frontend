import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

function Navbar() {
  const { user, logout } =
    useAuth();

  const navigate =
    useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className="
      flex
      h-20
      items-center
      justify-between
      border-b
      bg-white
      px-8
      "
    >
      <h2
        className="
        text-2xl
        font-semibold
        "
      >
        Dashboard
      </h2>

      <div
        className="
        flex
        items-center
        gap-5
        "
      >
        <div>
          <p
            className="
            font-semibold
            "
          >
            {user?.name}
          </p>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="
          rounded-lg
          bg-red-500
          px-4
          py-2
          text-white
          "
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
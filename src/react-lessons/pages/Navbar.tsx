import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routing/routes";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);

    setTimeout(() => {
      localStorage.removeItem("userId");
      setLoggingOut(false);
      navigate("/login");
    }, 800); // 1.5s delay for animation
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-3 bg-gray-100 shadow-sm">
        {/* Left: Links */}
        <div className="flex space-x-6">
          {ROUTES.map(({ path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-2 rounded transition ${
                  isActive
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              {path === "/"
                ? "Home"
                : path.substring(1).charAt(0).toUpperCase() +
                  path.substring(2)}
            </NavLink>
          ))}
        </div>

        {/* Right: Logout styled like links */}
        {userId && (
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className={`text-sm font-medium px-3 py-2 rounded transition cursor-pointer
              ${
                loggingOut
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
          >
            Logout
          </button>
        )}
      </nav>

      {/* Fullscreen Spinner Overlay */}
      {loggingOut && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="flex flex-col items-center">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-t-transparent border-red-200 rounded-full animate-spin"></div>
            <p className="mt-4 text-red-200 text-lg font-semibold">
              Logging out...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

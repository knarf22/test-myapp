import React, { useState } from "react";
import loginImg from "../../../public/img/login2.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginUI: React.FC = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const user = await login({ username, password });
      console.log("✅ Logged in:", user);
      navigate("/"); // change to your after-login page
    } catch (err) {
      console.error("❌ Login failed:", err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="sm:w-1/2 w-full flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold mb-6 text-[#666565]">Login</h2>

          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="p-3 mb-1 w-full border border-gray-300 rounded-lg"
              autoComplete="username"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-3 mb-1 w-full border border-gray-300 rounded-lg"
              autoComplete="current-password"
            />

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#847379] text-white p-3 w-full rounded-lg mb-4 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Signup Text */}
          <div className="text-center text-gray-600">
            <p className="mb-2">Don’t have an account?</p>
            <button
              onClick={() => navigate("/sign-up")}
              className="text-[#847379] font-semibold hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden sm:flex sm:w-1/2 justify-center items-center">
          <img src={loginImg} alt="Login Illustration" className="rounded-3xl object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LoginUI;

// src/react-lessons/login-register/LoginUI.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { UserLoginRequest } from "../../types/auth";
import loginImg from "../../../public/img/login2.jpg";
import { useAuthContext } from "../../context/authContext";
import { useAuthService } from "../../hooks/useAuth";

const LoginUI: React.FC = () => {
  const { login, loading } = useAuthService();
  const { setToken } = useAuthContext();
  const navigate = useNavigate();

  const [form, setForm] = useState<UserLoginRequest>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await login(form);
      if (res.token) {
        setToken(res.token);
        navigate("/");
      }
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

          <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3">
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              placeholder="Username"
              className="p-3 w-full border border-gray-300 rounded-lg"
              autoComplete="username"
            />

            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Password"
              className="p-3 w-full border border-gray-300 rounded-lg"
              autoComplete="current-password"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#847379] text-white p-3 w-full rounded-lg cursor-pointer disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Signup Text */}
          <div className="text-center text-gray-600 mt-4">
            <p className="mb-2">Don’t have an account?</p>
            <button
              onClick={() => navigate("/sign-up")}
              className="text-[#847379] font-semibold hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden sm:flex sm:w-1/2 justify-center items-center">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="rounded-3xl object-contain"
          />
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="flex flex-col items-center">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-t-transparent border-red-200 rounded-full animate-spin"></div>
            <p className="mt-4 text-red-200 text-lg font-semibold">
              Logging in...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginUI;

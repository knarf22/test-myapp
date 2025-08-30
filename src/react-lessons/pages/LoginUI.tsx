import React from 'react';
import login from '../../../public/img/login2.jpg'; // Importing the image
import { useNavigate } from 'react-router-dom';

const LoginUI: React.FC = () => {
  const navigate = useNavigate();


  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      {/* Container */}
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="sm:w-1/2 w-full flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold mb-6 text-[#666565]">Login</h2>

          <input
            type="text"
            placeholder="Username"
            className="p-3 mb-4 w-full border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-6 w-full border border-gray-300 rounded-lg"
          />

          <button className="bg-[#847379] text-white p-3 w-full rounded-lg mb-4 cursor-pointer">
            Login
          </button>

          {/* Signup Text */}
          <div className="text-center text-gray-600">
            <p className="mb-2">If you already have an account, just login</p>
            <p className="mb-2">or</p>
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
          <img
            src={login}
            alt="Login Illustration"
            className="rounded-3xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginUI;

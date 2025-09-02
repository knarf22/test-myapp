// src/pages/LoginUI.tsx
import React, { useState } from 'react';
import loginImg from '../../../public/img/login2.jpg'; // Importing the image
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const LoginUI: React.FC = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login({ username, password });
      console.log('Logged in:', user);
      navigate('/'); // redirect after login
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed! Check your credentials.');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="sm:w-1/2 w-full flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold mb-6 text-[#666565]">Login</h2>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 mb-4 w-full border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 mb-6 w-full border border-gray-300 rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#847379] text-white p-3 w-full rounded-lg mb-4 cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Signup Text */}
          <div className="text-center text-gray-600">
            <p className="mb-2">If you already have an account, just login</p>
            <p className="mb-2">or</p>
            <button
              onClick={() => navigate('/sign-up')}
              className="text-[#847379] font-semibold hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden sm:flex sm:w-1/2 justify-center items-center">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="rounded-3xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginUI;

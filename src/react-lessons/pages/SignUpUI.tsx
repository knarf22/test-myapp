import React from 'react';
import signup from '../../../public/img/login2.jpg'; // You can replace with a sign-up related image if available
import { useNavigate } from 'react-router-dom';

const SignupUI: React.FC = () => {
    const navigate = useNavigate();


    return (
        <div className="flex h-screen justify-center items-center bg-gray-50">
            {/* Container */}
            <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">

                {/* Left Side (Image) */}
                <div className="hidden sm:flex sm:w-1/2 justify-center items-center">
                    <img
                        src={signup}
                        alt="Signup Illustration"
                        className="rounded-3xl object-contain"
                    />
                </div>

                {/* Right Side (Form) */}
                <div className="sm:w-1/2 w-full flex flex-col justify-center p-4">
                    <h2 className="text-2xl font-bold mb-6 text-[#666565]">Sign Up</h2>

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="p-3 mb-4 w-full border border-gray-300 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-3 mb-4 w-full border border-gray-300 rounded-lg"
                    />
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
                        Sign Up
                    </button>

                    {/* Login Text */}
                    <div className="text-center text-gray-600">
                        <p className="mb-2">Already have an account?</p>
                        <button
                            onClick={() => navigate("/login")}
                            className="text-[#847379] font-semibold hover:underline cursor-pointer"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupUI;

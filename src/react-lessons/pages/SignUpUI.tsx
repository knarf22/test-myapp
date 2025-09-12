import React from 'react';
import signup from '../../../public/img/login2.jpg'; // You can replace with a sign-up related image if available
import { useNavigate } from 'react-router-dom';
import { registerSchema, type RegisterSchema } from '../../schemas/registerSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SignupUI: React.FC = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } =
        useForm<RegisterSchema>({
            resolver: zodResolver(registerSchema),
        });

    const onSubmit = (data: RegisterSchema) => {
        console.log("Form data:", data);
    };
    console.log("errors", errors)

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
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                            {...register("fullname")}
                            type="text"
                            placeholder="Full Name"
                            className="p-3 mb-4 w-full border border-gray-300 rounded-lg"
                        />
                        <input
                            {...register("username")}
                            type="text"
                            placeholder="Username"
                            className="p-3 mb-4 w-full border border-gray-300 rounded-lg"
                        />
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                            className="p-3 mb-6 w-full border border-gray-300 rounded-lg"
                        />
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            placeholder="Confirm Password"
                            className="p-3 mb-6 w-full border border-gray-300 rounded-lg"
                        />

                        <button type='submit' className="bg-[#847379] text-white p-3 w-full rounded-lg mb-4 cursor-pointer">
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
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignupUI;

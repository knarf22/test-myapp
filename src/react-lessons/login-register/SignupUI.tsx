import React from 'react';
import signup from '../../../public/img/login2.jpg';
import { useNavigate } from 'react-router-dom';
import { registerSchema, type RegisterSchema } from '../../schemas/registerSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUserService } from '../../services/authService';

const SignupUI: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullname: '',
            username: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async(data: RegisterSchema) => {
        try {
            const res = await registerUserService(data); // ✅ works because it's async
            alert(`Welcome, ${res.username}!`);
            navigate("/login");
        } catch (err) {
            alert("Registration failed");
        }
    };


    return (
        <div className="flex h-screen justify-center items-center bg-gray-50">
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
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                        {/* Full Name */}
                        <input
                            {...register("fullname")}
                            type="text"
                            placeholder="Full Name"
                            className="p-3 mb-1 w-full border border-gray-300 rounded-lg"
                            autoComplete="off"
                        />
                        {errors.fullname && (
                            <p className="text-red-500 text-sm mb-3">{errors.fullname.message}</p>
                        )}

                        {/* Username */}
                        <input
                            {...register("username")}
                            type="text"
                            placeholder="Username"
                            className="p-3 mb-1 w-full border border-gray-300 rounded-lg"
                            autoComplete="new-username"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mb-3">{errors.username.message}</p>
                        )}

                        {/* Password */}
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                            className="p-3 mb-1 w-full border border-gray-300 rounded-lg"
                            autoComplete="new-password"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mb-3">{errors.password.message}</p>
                        )}

                        {/* Confirm Password */}
                        <input
                            {...register("confirmPassword")}
                            type="password"
                            placeholder="Confirm Password"
                            className="p-3 mb-1 w-full border border-gray-300 rounded-lg"
                            autoComplete="new-password"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mb-3">{errors.confirmPassword.message}</p>
                        )}

                        <button
                            type="submit"
                            className="bg-[#847379] text-white p-3 w-full rounded-lg mb-4 cursor-pointer"
                        >
                            Sign Up
                        </button>

                        <div className="text-center text-gray-600">
                            <p className="mb-2">Already have an account?</p>
                            <button
                                type="button"
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

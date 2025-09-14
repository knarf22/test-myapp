// src/hooks/useAuth.ts
import { useState } from "react";
import { loginUser, registerUserService } from "../services/authService";
import type { UserLoginRequest, UserLoginResponse, UserRegisterRequest, UserRegisterResponse } from "../types/auth";


export function useAuth() {
    const [loading, setLoading] = useState(false);

    const login = async (data: UserLoginRequest): Promise<UserLoginResponse> => {
        setLoading(true);
        try {
            return await loginUser(data);
        } finally {
            setLoading(false);
        }
    };

    const registerUser = async (data : UserRegisterRequest) : Promise<UserRegisterResponse> => {
        setLoading(true);
        try{
            return await registerUserService(data);
        }finally{
            setLoading(false);
        }
    }

    return { login, registerUser, loading };
}

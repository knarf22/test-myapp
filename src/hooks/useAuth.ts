// src/hooks/useAuth.ts
import { useState } from "react";
import { loginUser } from "../services/authService";
import type { UserLoginRequest, UserLoginResponse } from "../types/auth";


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

    return { login, loading };
}

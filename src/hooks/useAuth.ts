  // src/hooks/useAuthService.ts
  import { useState } from "react";
  import type {
    UserLoginRequest,
    UserLoginResponse,
    UserRegisterRequest,
    UserRegisterResponse,
  } from "../types/auth";
  import { loginUser, registerUserService } from "../services/authService";

  export function useAuthService() {
    const [loading, setLoading] = useState(false);

    const login = async (data: UserLoginRequest): Promise<UserLoginResponse> => {
      setLoading(true);
      try {
        const result = await loginUser(data);
        // force minimum delay of 1.5s before returning
        await new Promise((resolve) => setTimeout(resolve, 800));
        return result;

      } finally {
        setLoading(false);
      }
    };

    const registerUser = async (
      data: UserRegisterRequest
    ): Promise<UserRegisterResponse> => {
      setLoading(true);
      try {
        return await registerUserService(data);
      } finally {
        setLoading(false);
      }
    };

    return { login, registerUser, loading };
  }

// src/services/authService.ts

import { login } from "../api/authAPI";
import type { UserLoginRequest } from "../types/auth";

export async function loginUser(data: UserLoginRequest) {
  const response = await login(data);
  localStorage.setItem("token", response.token);
  return response;
}

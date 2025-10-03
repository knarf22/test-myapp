// src/services/authService.ts

import { login, register } from "../api/authAPI";
import type { UserLoginRequest, UserRegisterRequest } from "../types/auth";

export async function loginUser(data: UserLoginRequest) {
  const response = await login(data);
  localStorage.setItem("token", response.token);
  localStorage.setItem("userId", String(response.userId)); // ✅ convert to string
  localStorage.setItem("username", String(response.username)); // ✅ convert to string
  return response;
}

export async function registerUserService(data: UserRegisterRequest) {
  const response = await register(data);
  return response;
}

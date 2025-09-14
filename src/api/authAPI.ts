// src/api/authApi.ts
import axios from "axios";
import type { UserLoginRequest, UserLoginResponse, UserRegisterRequest, UserRegisterResponse } from "../types/auth";
import { API_ROUTES } from "../constants/apiRoutes";

const API_URL = import.meta.env.VITE_API_URL ?? "https://localhost:5001";

export async function login(data: UserLoginRequest): Promise<UserLoginResponse> {
  const res = await axios.post(`${API_URL}${API_ROUTES.LOGIN}`, data);
  return res.data;
}

export async function register(data: UserRegisterRequest): Promise<UserRegisterResponse> {
  const res = await axios.post(`${API_URL}${API_ROUTES.REGISTER}`, data);
  return res.data;
}

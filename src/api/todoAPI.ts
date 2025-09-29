// src/api/todoApi.ts
import axios from "axios";
import type { TodoItem } from "../types/todo";
import { API_ROUTES, API_URL } from "../constants/apiRoutes";

export async function get(userId: number): Promise<TodoItem[]> {
  const res = await axios.get<TodoItem[]>(`${API_URL}${API_ROUTES.GET_TODO(userId)}`);
  return res.data;
}

export async function create(
  userId: number,
  title: string,
  description: string
): Promise<TodoItem> {
  const res = await axios.post<TodoItem>(`${API_URL}${API_ROUTES.CREATE_TODO}`, {
    title,
    description,
    userId,
  });
  return res.data;
}

export async function update(
  id: number,
  title: string,
  description: string
): Promise<void> {
  await axios.put(`${API_URL}${API_ROUTES.UPDATE_TODO(id)}`, { title, description });
}

export async function complete(id: number): Promise<void> {
  await axios.put(`${API_URL}${API_ROUTES.COMPLETE_TODO(id)}`);
}

export async function remove(id: number): Promise<void> {
  await axios.delete(`${API_URL}${API_ROUTES.DELETE_TODO(id)}`);
}

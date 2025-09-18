import axios from "axios";
import type { TodoItem } from "../react-lessons/todo/Todo";

const API_URL = "https://localhost:5001/api/Todo";

export const getTodos = async (userId: number): Promise<TodoItem[]> => {
  const res = await axios.get<TodoItem[]>(`${API_URL}/active/${userId}`);
  return res.data;
};

export const createTodo = async (
  userId: number,
  title: string,
  description: string
): Promise<TodoItem> => {
  const res = await axios.post<TodoItem>(API_URL, {
    title,
    description,
    userId,
  });
  return res.data;
};

export const updateTodo = async (
  id: number,
  title: string,
  description: string
): Promise<void> => {
  await axios.put(`${API_URL}/${id}/update`, {
    title,
    description,
  });
};

export const completeTodo = async (id: number): Promise<void> => {
  await axios.put(`${API_URL}/${id}/complete`);
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

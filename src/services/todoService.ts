// src/services/todoService.ts

import { complete, create, get, remove, update } from "../api/todoAPI";
import type { TodoItem } from "../types/todo";

export async function getTodos(userId: number): Promise<TodoItem[]> {
  return await get(userId);
}

export async function createTodo(
  userId: number,
  title: string,
  description: string
): Promise<TodoItem> {
  return await create(userId, title, description);
}

export async function updateTodo(
  id: number,
  title: string,
  description: string
): Promise<void> {
  await update(id, title, description);
}

export async function completeTodo(id: number): Promise<void> {
  await complete(id);
}

export async function deleteTodo(id: number): Promise<void> {
  await remove(id);
}

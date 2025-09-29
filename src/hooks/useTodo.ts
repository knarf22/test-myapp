// src/hooks/useTodoService.ts
import { useState } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  completeTodo,
  deleteTodo,
} from "../services/todoService";
import type { TodoItem } from "../types/todo";

export function useTodoService() {
  const [loading, setLoading] = useState(false);

  const fetchTodos = async (userId: number): Promise<TodoItem[]> => {
    setLoading(true);
    try {
      return await getTodos(userId);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (
    userId: number,
    title: string,
    description: string
  ): Promise<TodoItem> => {
    setLoading(true);
    try {
      return await createTodo(userId, title, description);
    } finally {
      setLoading(false);
    }
  };

  const editTodo = async (
    id: number,
    title: string,
    description: string
  ): Promise<void> => {
    setLoading(true);
    try {
      await updateTodo(id, title, description);
    } finally {
      setLoading(false);
    }
  };

  const markComplete = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      await completeTodo(id);
    } finally {
      setLoading(false);
    }
  };

  const removeTodo = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      await deleteTodo(id);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchTodos,
    addTodo,
    editTodo,
    markComplete,
    removeTodo,
    loading,
  };
}

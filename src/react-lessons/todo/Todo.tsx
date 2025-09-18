import React, { useEffect, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import {
  getTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
} from "../../services/todoService";

export type TodoItem = {
  todoId: number;
  userId: number;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: string;
};

const USER_ID = 29;

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // fetch on mount
  useEffect(() => {
    getTodos(USER_ID)
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  const saveTodo = async () => {
    const trimmedTitle = title.trim();
    const trimmedDesc = description.trim();
    if (!trimmedTitle) return;

    if (editingId !== null) {
      try {
        await updateTodo(editingId, trimmedTitle, trimmedDesc);

        setTodos((prev) =>
          prev.map((t) =>
            t.todoId === editingId
              ? { ...t, title: trimmedTitle, description: trimmedDesc }
              : t
          )
        );

        setEditingId(null);
      } catch (err) {
        console.error("Error updating todo:", err);
      }
    } else {
      try {
        const newTodo = await createTodo(USER_ID, trimmedTitle, trimmedDesc);
        setTodos((prev) => [newTodo, ...prev]);
      } catch (err) {
        console.error("Error creating todo:", err);
      }
    }

    setTitle("");
    setDescription("");
    inputRef.current?.focus();
  };


  const toggleDone = async (id: number) => {
    try {
      console.log("id", id)
      await completeTodo(id);
      setTodos((prev) =>
        prev.map((t) => (t.todoId === id ? { ...t, isDone: true } : t))
      );
    } catch (err) {
      console.error("Error marking complete:", err);
    }
  };

  const removeTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.todoId !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const editTodo = (todo: TodoItem) => {
    setTitle(todo.title);
    setDescription(todo.description);
    setEditingId(todo.todoId);
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Todo</h1>
      <TodoInput
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        saveTodo={saveTodo}
        inputRef={inputRef}
        editingId={editingId}
      />
      <TodoList
        todos={todos}
        toggleDone={toggleDone}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default Todo;

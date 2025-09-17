import React, { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export type TodoItem = {
    id: number;
    title: string;
    description: string;
    done: boolean;
};

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const saveTodo = () => {
        const trimmedTitle = title.trim();
        const trimmedDesc = description.trim();
        if (!trimmedTitle) return;

        if (editingId !== null) {
            // Update existing todo
            setTodos((prev) =>
                prev.map((t) =>
                    t.id === editingId ? { ...t, title: trimmedTitle, description: trimmedDesc } : t
                )
            );
            setEditingId(null);
        } else {
            // Add new todo
            setTodos((prev) => [
                { id: Date.now(), title: trimmedTitle, description: trimmedDesc, done: false },
                ...prev,
            ]);
        }

        setTitle("");
        setDescription("");
        inputRef.current?.focus();
    };

    const toggleDone = (id: number) =>
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

    const removeTodo = (id: number) => setTodos((prev) => prev.filter((t) => t.id !== id));

    const editTodo = (todo: TodoItem) => {
        setTitle(todo.title);
        setDescription(todo.description);
        setEditingId(todo.id);
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

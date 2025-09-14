import React, { useRef, useState } from "react";

type TodoItem = { id: number; text: string; done: boolean };

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [text, setText] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const addTodo = () => {
        const trimmed = text.trim();
        if (!trimmed) return;
        setTodos((prev) => [
            { id: Date.now(), text: trimmed, done: false },
            ...prev,
        ]);
        setText("");
        inputRef.current?.focus();
    };

    const toggleDone = (id: number) =>
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

    const removeTodo = (id: number) => setTodos((prev) => prev.filter((t) => t.id !== id));

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Todo</h1>

            <div className="flex gap-2">
                <input
                    ref={inputRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                    placeholder="Add a task..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <button
                    onClick={addTodo}
                    disabled={!text.trim()}
                    className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                > 
                    Add
                </button>
            </div>

            <ul className="mt-4 space-y-2">
                {todos.length === 0 ? (
                    <li className="text-sm text-center text-gray-400">No tasks yet — add your first one!</li>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={() => toggleDone(todo.id)}
                                    className="h-5 w-5"
                                />
                                <span className={`select-none ${todo.done ? "line-through text-gray-400" : "text-gray-800"}`}>
                                    {todo.text}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => removeTodo(todo.id)}
                                    className="text-sm text-red-500 hover:underline cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Todo;

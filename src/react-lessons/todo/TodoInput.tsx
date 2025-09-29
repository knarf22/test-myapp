import React from "react";
import type { TodoInputProps } from "../../types/todo";

const TodoInput: React.FC<TodoInputProps> = ({
    title,
    setTitle,
    description,
    setDescription,
    saveTodo,
    inputRef,
    editingId,
}) => {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <input
                ref={inputRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveTodo()}
                placeholder="Task title..."
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveTodo()}
                placeholder="Task description..."
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
                onClick={saveTodo}
                disabled={!title.trim()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
                {editingId !== null ? "Save" : "Add"}
            </button>
        </div>
    );
};

export default TodoInput;

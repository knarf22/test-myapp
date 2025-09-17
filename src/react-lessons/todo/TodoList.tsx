import React from "react";
import type { TodoItem } from "./Todo";

type TodoListProps = {
    todos: TodoItem[];
    toggleDone: (id: number) => void;
    removeTodo: (id: number) => void;
    editTodo: (todo: TodoItem) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleDone, removeTodo, editTodo }) => {
    if (todos.length === 0) return <p className="text-gray-500">No tasks yet.</p>;

    return (
        <ul className="flex flex-col gap-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`p-4 border rounded-lg flex flex-col gap-1 ${
                        todo.done ? "bg-green-100 line-through" : "bg-gray-50"
                    }`}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{todo.title}</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={() => toggleDone(todo.id)}
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                {todo.done ? "Undo" : "Done"}
                            </button>
                            <button
                                onClick={() => editTodo(todo)}
                                className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                    {todo.description && <p className="text-gray-700">{todo.description}</p>}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;

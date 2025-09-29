export type TodoItem = {
  todoId: number;
  userId: number;
  title: string;
  description: string;
  isDone: boolean;
  createdAt: string;
};

export type TodoInputProps = {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    saveTodo: () => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
    editingId: number | null;
};

export type TodoListProps = {
    todos: TodoItem[];
    toggleDone: (id: number) => void;
    removeTodo: (id: number) => void;
    editTodo: (todo: TodoItem) => void;
};
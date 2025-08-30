export type Filter = "all" | "active" | "completed";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
}

export interface TodoFooterProps {
  remainingCount: number;
  clearCompleted: () => void;
  setFilter: (filter: Filter) => void;
  filter: Filter;
}

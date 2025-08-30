import { useState } from "react";
import { Todo } from "../types";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    const newTodo: Todo = { 
        id: Date.now().toString(), 
        text, 
        completed: false 
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
  };
};

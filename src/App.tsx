import './styles/main.css';
import './styles/input.css';
import './styles/global.css';
import './styles/footer.css';

import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import { Filter } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";


function App() {
  const { todos, addTodo, toggleTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <main className="main">
      <h1 className="title">todos</h1>
      <div className="panel">
        <TodoInput addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
        <TodoFooter 
          remainingCount={remainingCount} 
          clearCompleted={clearCompleted}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
      <div className="fake-panel-1"/>
      <div className="fake-panel-2"/>
    </main>
  );
}

export default App;

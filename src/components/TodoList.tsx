import { FC } from "react";
import { TodoListProps } from "../types";
import TodoItem from "./TodoItem";


const TodoList: FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;

import { FC } from "react";
import { TodoItemProps } from "../types";

const TodoItem: FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className="list-elem">
      <label 
        className="label"
        style={{ 
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#c7c7c7ff" : "",
        }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;

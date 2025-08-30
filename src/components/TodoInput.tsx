import { useState, FC } from "react";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <svg width="30" height="30" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5" stroke="#ccc" strokeWidth="2" fill="none" />
      </svg>
      
      <input
        name="todo"
        className="input-area"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={e => setText(e.target.value)}
        autoComplete="off"
      />
    </form>
  );
};

export default TodoInput;

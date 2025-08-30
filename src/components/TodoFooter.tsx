import { FC } from "react";
import { TodoFooterProps } from "../types";
import { useScreenSize } from "../hooks/useScreenSize";


const TodoFooter: FC<TodoFooterProps> = ({ 
  remainingCount, 
  clearCompleted,
  setFilter,
  filter,
}) => {
  return (
    <div className="footer">
      <span className="items-counter">{remainingCount} 
        {`${useScreenSize() === "m" ? " left" : " items left"}`}
      </span>
      <div className=".filters-wrapper">
        <button 
          className={`filter-btn ${filter === 'all' ? 'filter-btn_selected' : ''}`} 
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'filter-btn_selected' : ''}`}  
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'filter-btn_selected' : ''}`} 
          onClick={() => setFilter("completed")}
        >
          {`${useScreenSize() === "m" ? "Compl" : "Completed"}`}
        </button>  
      </div>
      <button 
        className="clear-btn" 
        onClick={clearCompleted}
      >
        {`${useScreenSize() === "m" ? "Clear" : "Clear completed"}`}
      </button>
    </div>
  );
};

export default TodoFooter;

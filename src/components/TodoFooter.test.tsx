import { render, screen, fireEvent } from "@testing-library/react";
import TodoFooter from "./TodoFooter";

test("отображает правильный счетчик", () => {
  render(
    <TodoFooter
      remainingCount={5}
      clearCompleted={() => {}}
      filter="all"
      setFilter={() => {}}
    />
  );
  expect(screen.getByText(/5 items left/i)).toBeInTheDocument();
});

test("фильтр меняется при клике и вызывается setFilter", () => {
  const setFilter = jest.fn();
  render(
    <TodoFooter
      remainingCount={0}
      clearCompleted={() => {}}
      filter="all"
      setFilter={setFilter}
    />
  );
  fireEvent.click(screen.getByText(/Active/i));
  expect(setFilter).toHaveBeenCalledWith("active");
});

test("кнопка очистки вызывает clearCompleted", () => {
  const clearCompleted = jest.fn();
  render(
    <TodoFooter
      remainingCount={0}
      clearCompleted={clearCompleted}
      filter="all"
      setFilter={() => {}}
    />
  );
  fireEvent.click(screen.getByText(/Clear completed/i));
  expect(clearCompleted).toHaveBeenCalled();
});

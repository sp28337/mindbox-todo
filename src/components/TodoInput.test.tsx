import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "./TodoInput";

test("добавляет новую задачу и очищает инпут", () => {
  const addTodo = jest.fn();

  render(<TodoInput addTodo={addTodo} />);

  const input = screen.getByPlaceholderText(/What needs to be done\?/i);

  fireEvent.change(input, { target: { value: "Тестовая задача" } });

  // Получаем форму и вызываем submit
  const form = screen.getByRole("form");
  fireEvent.submit(form);

  // Проверяем что addTodo вызван
  expect(addTodo).toHaveBeenCalledWith("Тестовая задача");

  // Проверяем очистку инпута
  expect(input).toHaveValue("");
});

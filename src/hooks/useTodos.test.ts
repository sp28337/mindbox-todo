import { renderHook, act } from "@testing-library/react";
import { useTodos } from "./useTodos";

describe("useTodos hook", () => {
  it("добавляет новую задачу", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Новая задача");
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].text).toBe("Новая задача");
  });

  it("переключает статус задачи", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Задача");
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it("очищает выполненные задачи", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Задача1");
      result.current.addTodo("Задача2");
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.todos.find(todo => todo.id === id)).toBe(undefined);
  });
});

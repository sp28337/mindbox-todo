import { renderHook } from "@testing-library/react";
import { useScreenSize } from "./useScreenSize";

describe("useScreenSize hook", () => {
  it('возвращает "m" при ширине < 768', () => {
    global.innerWidth = 500;
    const { result } = renderHook(() => useScreenSize());
    expect(result.current).toBe("m");
  });

  it('возвращает "d" при ширине >= 768', () => {
    global.innerWidth = 1024;
    const { result } = renderHook(() => useScreenSize());
    expect(result.current).toBe("d");
  });
});

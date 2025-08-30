import { useState, useEffect } from "react";

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState("d");

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth < 768 ? "m" : "d");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") ?? "dark";
    localTheme && setTheme(localTheme.toString);
  }, []);

  return [theme, toggleTheme];
};

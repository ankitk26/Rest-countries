import cookieCutter from "cookie-cutter";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    cookieCutter.set("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = cookieCutter.get("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
};

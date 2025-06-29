import { useEffect, useState } from "react";

const useThemeToggle = () => {
  const getInitialTheme = () => localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = ""; // reset all theme classes
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return [theme, toggleTheme];
};

export default useThemeToggle;

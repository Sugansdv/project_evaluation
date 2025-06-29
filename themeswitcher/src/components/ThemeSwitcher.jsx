import React from "react";
import useThemeToggle from "../hooks/useThemeToggle";

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useThemeToggle();

  return (
    <div className="form-check form-switch d-flex align-items-center gap-2">
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitch"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label className="form-check-label" htmlFor="themeSwitch">
        {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </label>
    </div>
  );
};

export default ThemeSwitcher;

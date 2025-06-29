import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">🌓 Theme Switcher</h2>
      <ThemeSwitcher />

      <p className="mt-4">
        This is a simple React app with light/dark theme, selected mode saved in localStorage .
      </p>
    </div>
  );
};

export default App;

import React from "react";
import Topbar from "./components/Topbar"; // ✅ Import Topbar
import TodoApp from "./pages/TodoApp";    // Import your main To-Do app
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Define the clearAll handler at this level if needed,
  // OR you can keep it inside TodoApp and pass it through props if modular.
  const handleClearAll = () => {
    const event = new CustomEvent("clearAllTasks");
    window.dispatchEvent(event);
  };

  return (
    <>
      <Topbar onClear={handleClearAll} />
      <TodoApp />
    </>
  );
};

export default App;

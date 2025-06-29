// src/App.jsx
import React from "react";
import Topbar from "./components/Topbar";
import ToggleCard from "./components/ToggleCard";
import ToggleModal from "./components/ToggleModal";
import ToggleDropdown from "./components/ToggleDropdown";

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container mt-5">
        <ToggleCard />
        <ToggleDropdown />
        <div className="mt-4">
          <ToggleModal />
        </div>
      </div>
    </div>
  );
};

export default App;

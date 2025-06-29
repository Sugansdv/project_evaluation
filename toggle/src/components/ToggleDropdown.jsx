// src/components/ToggleDropdown.jsx
import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleDropdown = () => {
  const [open, toggleOpen] = useToggle("dropdownOpen");

  return (
    <div className="dropdown mt-3">
      <button className="btn btn-warning dropdown-toggle" onClick={toggleOpen}>
        Toggle Menu
      </button>

      {open && (
        <ul className="dropdown-menu show position-static mt-2">
          <li><button className="dropdown-item">📁 Profile</button></li>
          <li><button className="dropdown-item">⚙️ Settings</button></li>
          <li><button className="dropdown-item">🔒 Logout</button></li>
        </ul>
      )}
    </div>
  );
};

export default ToggleDropdown;

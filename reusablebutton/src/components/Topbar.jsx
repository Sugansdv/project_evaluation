import React from "react";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Topbar.css"; 
const Topbar = ({ onClear }) => {
  return (
    <div className="topbar bg-warning d-flex justify-content-center align-items-center px-3 py-2 shadow-sm">
      <h5 className="mb-0 fw-bold p-3">📝 My To-Do App</h5>
    </div>
  );
};

Topbar.propTypes = {
  onClear: PropTypes.func.isRequired,
};

export default Topbar;

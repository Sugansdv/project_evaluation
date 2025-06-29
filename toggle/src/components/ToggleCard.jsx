
import React from "react";
import useToggle from "../hooks/useToggle";
import "../assets/ToggleCard.css";

const ToggleCard = () => {
  const [showQuote, toggleQuote] = useToggle("showQuote", true);

  return (
    <div className="mb-4">
      <button className="btn btn-primary" onClick={toggleQuote}>
        {showQuote ? "Hide Quote" : "Show Quote"}
      </button>

      {showQuote && (
        <div className="info-box animate-fade mt-3 p-3 rounded bg-light border">
          <h5>💡 Daily Motivation</h5>
          <blockquote className="blockquote mb-0">
            “The future belongs to those who believe in the beauty of their dreams.”  
            <footer className="blockquote-footer mt-2">Eleanor Roosevelt</footer>
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default ToggleCard;

// src/components/ToggleModal.jsx
import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleModal = () => {
  const [show, toggleShow] = useToggle("showModal");

  return (
    <>
      <button className="btn btn-success" onClick={toggleShow}>
        {show ? "Close Modal" : "Open Modal"}
      </button>

      {show && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Real-Time Modal</h5>
                <button className="btn-close" onClick={toggleShow}></button>
              </div>
              <div className="modal-body">
                This modal remembers its state using <code>useToggle</code> + localStorage.
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={toggleShow}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToggleModal;

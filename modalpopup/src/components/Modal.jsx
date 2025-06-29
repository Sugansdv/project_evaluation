import React, { useEffect, useRef } from "react";
import "../assets/Modal.css";

const Modal = ({ show, onClose, children }) => {
  const modalRef = useRef(null);

  // Handle ESC key + Focus Trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    if (show) {
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        modalRef.current?.querySelector("button, a, input")?.focus();
      }, 100);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [show, onClose]);

  // Make modal draggable by header
  useEffect(() => {
    const modal = modalRef.current;
    const header = modal?.querySelector(".modal-drag-header");
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - modal.offsetLeft;
      offsetY = e.clientY - modal.offsetTop;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        modal.style.left = `${e.clientX - offsetX}px`;
        modal.style.top = `${e.clientY - offsetY}px`;
        modal.style.margin = 0;
        modal.style.position = "absolute";
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    header?.addEventListener("mousedown", onMouseDown);
    return () => header?.removeEventListener("mousedown", onMouseDown);
  }, [show]);

  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div ref={modalRef} className="modal-content animate-modal" tabIndex="-1">
        
        {/* Top Loader Bar */}
        <div className="modal-loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Draggable Header with Close */}
        <div className="modal-drag-header">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

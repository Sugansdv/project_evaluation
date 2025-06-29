import React, { useState } from "react";
import Modal from "./Modal";
import "../assets/TermPage.css";

const TermsModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // track checkbox

  const handleOpen = () => {
    setShowModal(true);
    setIsChecked(false); // Reset checkbox every time
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <nav className="navbar navbar-dark bg-primary px-4 fixed-top shadow">
  <span className="navbar-brand mb-0 h1 mx-auto">MyApp Dashboard</span>
</nav>


      <div className="container pt-5 mt-5 animate-fadeIn">
        <h2 className="mb-4 fw-bold">Platform Updates</h2>

        <div className="alert alert-info shadow-sm animate-slideIn">
          <strong>New Feature:</strong> Real-time collaboration is now live! Try
          editing with your team instantly.
        </div>

        <div className="card p-4 shadow-sm mt-4 animate-rise">
          <h5 className="fw-semibold mb-2">📢 Announcement</h5>
          <p className="text-muted">
            Please review our updated <strong>Terms & Conditions</strong>. We’ve
            enhanced data privacy and added new usage guidelines.
          </p>
          <div className="text-center">
            <button className="btn btn-primary read-btn" onClick={handleOpen}>
              Read Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal show={showModal} onClose={handleClose}>
          <p className="text-muted text-center mb-3">
            These are our latest terms. Please read carefully.
          </p>

          <div className="text-start" style={{ fontSize: "0.95rem" }}>
            <h6 className="fw-semibold">Usage Policy</h6>
            <ul>
              <li>Respectful communication is mandatory.</li>
              <li>No unauthorized file uploads or malware sharing.</li>
              <li>Admins reserve rights to remove violators.</li>
            </ul>

            <h6 className="fw-semibold mt-3">Data Privacy</h6>
            <ul>
              <li>Your data is securely encrypted and stored.</li>
              <li>No data is sold to third parties.</li>
            </ul>

            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="agreeCheck"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                style={{ border: "2px solid black" }}
              />

              <label className="form-check-label" htmlFor="agreeCheck">
                I agree to the Terms & Conditions.
              </label>
            </div>
          </div>

          <button
            className="btn btn-success w-100 mt-4"
            onClick={handleClose}
            disabled={!isChecked} // 🔹 disable unless checked
          >
            Accept & Continue
          </button>
        </Modal>
      )}
    </>
  );
};

export default TermsModal;

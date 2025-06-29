import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css"; // Custom styles

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleProtectedClick = (e) => {
    if (!user) {
      e.preventDefault();
      alert("Please login to continue.");
      navigate("/login");
    }
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg px-4" style={{ backgroundColor: "pink" }}>
      <NavLink to="/" className="navbar-brand text-black fw-bold">
        MyShop
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link custom-nav me-3 ${isActive ? "active-link" : ""}`
              }
              onClick={() => setIsCollapsed(true)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/product/1"
              className={({ isActive }) =>
                `nav-link custom-nav me-3 ${isActive ? "active-link" : ""}`
              }
              onClick={(e) => {
                handleProtectedClick(e);
                setIsCollapsed(true);
              }}
            >
              Product Detail
            </NavLink>
          </li>
          <li className="nav-item">
            {user ? (
              <button
                className="btn btn-outline-dark ms-2 me-3"
                onClick={() => {
                  handleLogout();
                  setIsCollapsed(true);
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-outline-dark ms-2"
                onClick={() => setIsCollapsed(true)}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

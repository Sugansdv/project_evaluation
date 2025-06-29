import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "animate.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      );
      if (existingUser) {
        localStorage.setItem("user", JSON.stringify(existingUser));
        navigate("/");
      } else {
        alert("Invalid credentials or not registered");
      }
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const alreadyExists = users.some((u) => u.email === email);
      if (alreadyExists) {
        alert("User already registered");
      } else {
        const newUser = { name, email, password };
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        alert("Registered successfully, you can now login.");
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "450px" }}>
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3 animate__animated animate__fadeInLeft">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="mb-3 animate__animated animate__fadeInLeft">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 position-relative animate__animated animate__fadeInLeft">
            <label>Password:</label>
            <input
              type={showPass ? "text" : "password"}
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={{ position: "absolute", right: 10, top: 38, cursor: "pointer" }}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {!isLogin && (
            <div className="mb-3 position-relative">
              <label>Confirm Password:</label>
              <input
                type={showConfirmPass ? "text" : "password"}
                className="form-control"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                style={{ position: "absolute", right: 10, top: 38, cursor: "pointer" }}
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              >
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <button className="btn btn-primary w-100 animate__animated animate__fadeInUp">
            {isLogin ? "Login" : "Register"}
          </button>

          <p className="mt-3 text-center">
            {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
            <button type="button" className="btn btn-link p-0" onClick={toggleForm}>
              {isLogin ? "Register here" : "Login here"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;

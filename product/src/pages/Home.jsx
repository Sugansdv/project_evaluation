// src/pages/Home.jsx
import React from "react";
import "../index.css"; // Make sure the animations are loaded

const Home = () => (
  <div className="container text-center mt-5">
    <h1 className="display-4 home-title animated fadeInDown">
      Welcome to <span className="highlight">ShopEase</span> 🛍️
    </h1>
    <p className="lead animated fadeInUp delay-1">Click on Products to explore!</p>
  </div>
);

export default Home;

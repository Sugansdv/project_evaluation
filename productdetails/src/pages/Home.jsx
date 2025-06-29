import React from "react";
import "animate.css";

const Home = () => (
  <div className="container mt-4 text-center">
    <h1 className="animate__animated animate__fadeInDown animate__slow">Welcome to MyShop</h1>
    <p className="animate__animated animate__fadeInUp animate__delay-1s">
      Explore our amazing products!
    </p>
    <img
      src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
      alt="Shop Icon"
      className="animate__animated animate__zoomIn animate__delay-2s"
      style={{ width: "150px", marginTop: "20px" }}
    />
  </div>
);

export default Home;

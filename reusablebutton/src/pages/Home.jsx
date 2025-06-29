// src/pages/Home.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setCartCount(prev => prev + 1);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Reusable Button Component Demo</h2>
      <p>🛒 Items in Cart: <strong>{cartCount}</strong></p>

      <div className="d-flex flex-column align-items-center gap-3 mt-4">
        <Button label="Primary" variant="primary" onClick={() => alert("Primary clicked")} />

        <Button label="Secondary" variant="secondary" onClick={() => alert("Secondary clicked")} />

        <Button
          label="Add to Cart"
          variant="primary"
          onClick={handleAddToCart}
          icon={<FaShoppingCart />}
          iconPosition="left"
          loading={loading}
        />

        <Button
          label="Next"
          variant="secondary"
          icon={<FaArrowRight />}
          iconPosition="right"
          onClick={() => alert("Next clicked")}
        />
      </div>
    </div>
  );
};

export default Home;

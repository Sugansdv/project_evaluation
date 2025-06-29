// src/components/ProductList.jsx
import React, { useEffect, useState } from "react";
import "../index.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5 fs-4">Loading Products...</div>;
  }

  return (
    <div className="row">
      {products.map((product) => (
        <div
          key={product.id}
          className="col-md-4 mb-4 animated fadeInUp"
          style={{ animationDuration: "0.8s" }}
        >
          <div className="card h-100 shadow-sm product-card">
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top p-3 product-image"
              style={{ height: "250px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title product-title ">
                {product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title}
              </h5>
              <p className="card-text fw-bold product-price">₹ {Math.round(product.price * 80)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

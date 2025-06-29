import React, { useEffect, useState } from "react";
import "animate.css";
import "../assets/ProductDetail.css";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tab, setTab] = useState("description");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  const user = JSON.parse(localStorage.getItem("user")); // Logged-in user

  const convertToINR = (usd) => `₹${Math.round(usd * 83).toLocaleString()}`;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSelect = (product) => {
    setSelectedProduct(product);
    setTab("description");

    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const productReviews = storedReviews.filter((r) => r.productId === product.id);
    setReviews(productReviews);
  };

  const handleSubmitReview = () => {
    if (!reviewText.trim()) return;

    const newReview = {
      id: Date.now(),
      productId: selectedProduct.id,
      name: user?.name || "Anonymous",
      text: reviewText,
    };

    const allReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...allReviews, newReview];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    setReviews([...reviews, newReview]);
    setReviewText("");
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 animate__animated animate__fadeInDown">Product Showcase</h2>

      {!selectedProduct && (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm animate__animated animate__zoomIn">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-success fw-semibold">
                    {convertToINR(product.price)}
                  </p>
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => handleSelect(product)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="row animate__animated animate__fadeInUp">
          <div className="col-md-5">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-7">
            <h2>{selectedProduct.title}</h2>
            <h4 className="text-success">
              {convertToINR(selectedProduct.price)}
            </h4>

            {/* Tabs */}
            <div className="tabs mt-4">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${tab === "description" ? "active" : ""}`}
                    onClick={() => setTab("description")}
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${tab === "reviews" ? "active" : ""}`}
                    onClick={() => setTab("reviews")}
                  >
                    Reviews
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${tab === "specs" ? "active" : ""}`}
                    onClick={() => setTab("specs")}
                  >
                    Specifications
                  </button>
                </li>
              </ul>

              <div className="tab-content p-3 border border-top-0 animate__animated animate__fadeIn">
                {tab === "description" && <p>{selectedProduct.description}</p>}

                {tab === "reviews" && (
                  <>
                    <h5>Customer Reviews:</h5>
                    {reviews.length === 0 ? (
                      <p>No reviews yet. Be the first to write one.</p>
                    ) : (
                      <ul className="list-group mb-3">
                        {reviews.map((r) => (
                          <li key={r.id} className="list-group-item">
                            <strong>{r.name}:</strong> {r.text}
                          </li>
                        ))}
                      </ul>
                    )}

                    {user && (
                      <div className="mt-3">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Write your review..."
                          value={reviewText}
                          onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                        <button
                          className="btn btn-primary mt-2"
                          onClick={handleSubmitReview}
                        >
                          Submit Review
                        </button>
                      </div>
                    )}
                  </>
                )}

                {tab === "specs" && (
                  <ul>
                    <li>High quality materials</li>
                    <li>1-year warranty</li>
                    <li>Free shipping included</li>
                  </ul>
                )}
              </div>
            </div>

            <button
              className="btn btn-secondary mt-4"
              onClick={() => setSelectedProduct(null)}
            >
              Back to Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

// src/pages/Post.jsx
import React from "react";
import Button from "../components/Button";
import { FaHeart, FaTrash, FaCheck, FaEye } from "react-icons/fa";

const Post = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Reusable Button Demo</h2>

      <div className="d-flex justify-content-center flex-wrap gap-3">
        <Button
          label="Like"
          variant="primary"
          icon={<FaHeart />}
          onClick={() => alert("Liked!")}
        />
        <Button
          label="Delete"
          variant="danger"
          icon={<FaTrash />}
          onClick={() => alert("Deleted!")}
        />
        <Button
          label="Save"
          variant="success"
          icon={<FaCheck />}
          onClick={() => alert("Saved!")}
        />
        <Button
          label="Preview"
          variant="outline"
          icon={<FaEye />}
          onClick={() => alert("Previewing...")}
        />
        <Button
          label="Disabled"
          variant="secondary"
          disabled
        />
        <Button
          label="Loading..."
          variant="primary"
          loading
        />
      </div>
    </div>
  );
};

export default Post;

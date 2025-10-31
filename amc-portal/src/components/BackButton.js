import React from "react";

function BackButton({ onClick }) {
  return (
    <button className="back-btn" onClick={onClick}>
      &larr; Back to Home
    </button>
  );
}

export default BackButton;

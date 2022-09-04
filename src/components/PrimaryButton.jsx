import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="primary-button">
      {children}
    </button>
  );
};

export default PrimaryButton;

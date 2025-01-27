import React from "react";

export const Button = ({ children, onClick, className, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded bg-blue-500 text-white ${className}`}
  >
    {children}
  </button>
);
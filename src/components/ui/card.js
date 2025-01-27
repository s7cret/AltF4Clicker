import React from "react";

export const Card = ({ children }) => (
  <div className="border rounded shadow p-4">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
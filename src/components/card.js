import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        padding: 100,
        margin: 10,
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

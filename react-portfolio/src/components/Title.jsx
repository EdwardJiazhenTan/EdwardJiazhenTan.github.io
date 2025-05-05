// src/components/Title.jsx
import React from "react";

export default function Title({ children, className = "" }) {
  return (
    <h2
      className={`text-4xl font-bold text-ctp-subtext1 inline border-b-4 border-ctp-pink ${className}`}
    >
      {children}
    </h2>
  );
}

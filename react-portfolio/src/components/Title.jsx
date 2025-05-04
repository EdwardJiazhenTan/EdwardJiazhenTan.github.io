// src/components/Title.jsx
import React from "react";

export default function Title({ children, className = "" }) {
  return (
    <h2
      className={`text-4xl font-bold inline border-b-4 border-[#d9cbb0] ${className}`}
    >
      {children}
    </h2>
  );
}

// src/components/Project.jsx
import React from "react";

export default function Project({ img, title, description, repoUrl }) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03]"
    >
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="h-48 w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text block */}
      <div className="p-4 bg-[#f5f4f1]">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-700 leading-tight">{description}</p>
      </div>
    </a>
  );
}

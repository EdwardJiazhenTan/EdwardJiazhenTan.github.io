// src/components/Project.jsx
import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

export default function Project({ img, title, description, repoUrl }) {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      className="relative w-full aspect-[4/3] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Front: image + title */}
      <a.div
        className="relative inset-0 rounded-xl shadow-md overflow-hidden flex flex-col"
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          backfaceVisibility: "hidden",
        }}
      >
        <img src={img} alt={title} className="w-full h-4/5 object-cover" />
        <div className="h-1/5 bg-ctp-surface1 flex items-center justify-center">
          <h3 className="text-lg font-semibold text-ctp-text">{title}</h3>
        </div>
      </a.div>

      {/* Back: description + link */}
      <a.div
        className="absolute inset-0 rounded-xl shadow-md p-4 bg-ctp-surface1 flex flex-col justify-between"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateY(180deg)`),
          backfaceVisibility: "hidden",
        }}
      >
        <div>
          <h3 className="text-lg font-semibold text-ctp-text mb-2">{title}</h3>
          <p className="text-sm text-ctp-subtext0">{description}</p>
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-ctp-sky underline self-end"
        >
          View Repo
        </a>
      </a.div>
    </div>
  );
}

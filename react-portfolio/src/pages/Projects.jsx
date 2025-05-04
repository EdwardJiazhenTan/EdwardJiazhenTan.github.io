// src/sections/Projects.jsx
import React from "react";
import Project from "../components/Project";

import img1 from "../assets/thinking.jpeg";
import img2 from "../assets/thinking2.jpeg";
import img3 from "../assets/threeJs.png";
import Title from "../components/Title";

export default function Projects() {
  return (
    <section name="projects" className="w-full items-center bg-[#8a8d8c] py-16">
      <div className="max-w-[1000px] mx-auto px-4">
        <Title className="mb-8"> Projects </Title>
        <br />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            img={img1}
            title="PhotonGPT"
            description="Real‑time voice‑to‑text LLM system with 60 ms latency."
            repoUrl="https://github.com/youruser/PhotonGPT"
          />
          <Project
            img={img2}
            title="MuseTalk API"
            description="Image‑to‑video lip‑sync backend (FastAPI · PyTorch)."
            repoUrl="https://github.com/youruser/MuseTalk"
          />
          <Project
            img={img3}
            title="JobScraper"
            description="AWS‑hosted crawler that emails new‑grad SWE openings."
            repoUrl="https://github.com/youruser/JobScraper"
          />
        </div>
      </div>
    </section>
  );
}

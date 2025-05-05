// src/sections/Projects.jsx
import React from "react";
import Project from "../components/Project";
import Title from "../components/Title";

import imgPortfolio from "../assets/project1.png";
import imgTerminal from "../assets/project2.png";
import imgGaussian from "../assets/project3.png";
import imgLeetTrack from "../assets/project4.png";
import imgAIReversi from "../assets/project5.png";
import imgMST from "../assets/project6.png";

export default function Projects() {
  return (
    <section
      name="projects"
      className="w-full h-screen items-center bg-ctp-base py-16"
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <Title className="mb-9">Projects</Title>
        <br />
        <div className="grid gap-7 my-8 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            img={imgPortfolio}
            title="Portfolio Website"
            description="Built with React & react-spring; hosted on GitHub Pages."
            repoUrl="https://github.com/EdwardJiazhenTan/EdwardJiazhenTan.github.io.git"
          />
          <Project
            img={imgTerminal}
            title="Terminal Workflow"
            description="Custom Neovim & tmux setup for an efficient CLI workflow."
            repoUrl="https://github.com/EdwardJiazhenTan/terminal-workflow"
          />
          <Project
            img={imgGaussian}
            title="React Gaussian Splat"
            description="Render .ply, .ksplat & .splat files in React."
            repoUrl="https://github.com/EdwardJiazhenTan/react-gaussian-splat.git"
          />
          <Project
            img={imgLeetTrack}
            title="LeetTrack"
            description="Tracking site for LeetCode stats and progress."
            repoUrl="https://github.com/EdwardJiazhenTan/LeetTrack.git"
          />
          <Project
            img={imgAIReversi}
            title="AI Reversi Game"
            description="Java Mini-Max AI with GUI for Reversi."
            repoUrl="https://github.com/EdwardJiazhenTan/AI-reversi-game.git"
          />
          <Project
            img={imgMST}
            title="Parallel MST"
            description="Java MST with multithreading, auto-benchmarking & GUI."
            repoUrl="https://github.com/EdwardJiazhenTan/MST.git"
          />
        </div>
      </div>
    </section>
  );
}

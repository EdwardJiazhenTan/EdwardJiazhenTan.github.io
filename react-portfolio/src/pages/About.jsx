import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skills from "../components/Skills";
import Title from "../components/Title";

const About = () => {
  return (
    <div name="about" className="flex flex-col items-center py-12 bg-[#8a8d8c]">
      <div className="pt-[100px]">
        <Title> About Me </Title>
      </div>

      <div className="flex flex-wrap justify-center items-start w-full max-w-5xl">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 p-4">
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I’m Edward Tan, a new‑grad software engineer (B.S. CS,
              University of Rochester) who builds scalable web and cloud
              systems. I’m now pursuing full‑time SWE roles where I can apply my
              full‑stack, DevOps, and 3‑D graphics skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A Linux enthusiast, I dive deep into operating systems,
              performance tuning, and terminal tooling—Neovim, tmux, and custom
              keybindings power my workflow. I enjoy turning complex
              requirements into clean, maintainable code and automating
              everything from CI/CD to cloud infra.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Off‑screen, you’ll find me modding ergonomic keyboards, hitting
              the gym, designing sleek gadgets, and exploring story‑driven video
              games—always creating setups that match my minimalist aesthetic.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I thrive in collaborative environments and enjoy tackling hard
              engineering problems. If you’re looking for a developer—or just
              share a passion for Linux, custom keyboards, or gaming—feel free
              to connect.
            </p>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="w-full">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import JsonBlock from "../components/JsonBlock";

const profile = {
  name: "Edward Tan",
  preferredName: "Ed",
  role: "Software Engineer",
  experienceLevel: "New Grad",
  years_coding: 5,
  direction: ["full‑stack", "cloud"],
  school: "University of Rochester",
  graduated: 2025,
  night_owl: true,
};

export default function Home() {
  return (
    /* Full‑screen background; flex centers the inner block both axes */
    <div
      name="home"
      className="w-full h-screen bg-ctp-base flex items-center justify-center"
    >
      {/* Main container with safe padding */}
      <div className="max-w-[1000px] w-full px-8 py-12 flex flex-col md:flex-row gap-8">
        {/* LEFT 50 % — intro text */}
        <div className="flex-1">
          <p className="ml-2 text-ctp-text sm:text-2xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-ctp-mauve">
            Edward Tan
          </h1>
          <h2 className="text-ctp-subtext0 text-4xl sm:text-7xl font-bold">
            Software Engineer
          </h2>
        </div>

        {/* RIGHT 50 % — JSON card */}
        <div className="flex-1">
          <JsonBlock data={profile} />
        </div>
      </div>
    </div>
  );
}

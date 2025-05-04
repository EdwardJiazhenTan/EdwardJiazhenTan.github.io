import React from "react";

const workItems = [
  {
    title: "Software Developer Intern · GTSP Group",
    date: "12‑2024 – 02‑2025",
    description:
      "Containerized the UE5 backend, cutting rollout time from 15 min to 5 min.",
  },
  {
    title: "Freelance Web Developer",
    date: "08‑2024 – 05‑2025",
    description:
      "Launched a Next.js–Spring e‑commerce site, boosting client revenue by 60 %.",
  },
  {
    title: "Software Dev & Research Assistant · Peking University",
    date: "05‑2024 – 08‑2024",
    description:
      "Upgraded 3‑D reconstruction APIs and CI/CD, securing $75 k in new funding.",
  },
  {
    title: "Teaching Assistant · University of Rochester",
    date: "01‑2023 – 05‑2023",
    description:
      "Tutored CSC 172 students in Java data‑structures and algorithms, improving average project grades by 10 %.",
  },
  {
    title: "Barista · Starbucks",
    date: "06‑2022 – 08‑2022",
    description:
      "Served high‑volume customers efficiently, maintaining 95 % customer‑satisfaction scores.",
  },
];
const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-screen flex justify-center py-6 bg-[#8a8d8c]"
    >
      <div className="w-2/3 pt-[100px]">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#d9cbb0] pt-[100px] ">
            My work
          </p>
        </div>
        <br />
        <div className="relative border-l-2 border-gray-300">
          {workItems.map((item, index) => (
            <div
              className="mb-12 ml-6 max-w-[1000px] grid sm:grid-cols-2"
              key={index}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-[#d9cbb0] rounded-full border-2 border-white"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-[#282112]">{item.date}</p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

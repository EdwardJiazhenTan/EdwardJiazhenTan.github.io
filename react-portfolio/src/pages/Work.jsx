// src/components/Work.jsx
// src/components/Work.jsx
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaHourglassStart } from "react-icons/fa";

const workItems = [
  {
    position: "Software Developer Intern",
    company: "GTSP Group",
    date: "12-2024 – 02-2025",
    description:
      "Built Python tuning tools and revamped gRPC streams for an LLM-powered avatar platform, reducing latency by 500 ms.",
  },
  {
    position: "Software Developer Intern",
    company: "Peking University",
    date: "05-2024 – 08-2024",
    description:
      "Replaced JSON with MessagePack in WebSocket pipelines, cutting bandwidth 45% and saving 3 hours/week for ML researchers.",
  },
  {
    position: "Teaching Assistant",
    company: "University of Rochester",
    date: "01-2023 – 05-2023",
    description:
      "Tutored CSC 172 students in Java DS&A, helping boost average project scores by 10%.",
  },
  {
    position: "Barista",
    company: "Starbucks",
    date: "06-2022 – 08-2022",
    description:
      "Served 200+ daily customers efficiently while maintaining a 95% satisfaction rate.",
  },
];


export default function Work() {
  return (
    <section id="work" className="bg-ctp-base text-ctp-text pb-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold border-b-4 border-ctp-sky inline-block mb-8">
          My Work
        </h2>

        <VerticalTimeline lineColor="#363a4f" animate>
          {workItems.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              iconStyle={{ background: "#91d7e3", color: "#1e1e2e" }}
              contentStyle={{ background: "#494d64", color: "#cdd6f4" }}
              contentArrowStyle={{ borderRight: "7px solid #494d64" }}
              icon={<FaBriefcase />}
            >
              <div className="flex">
                {/* left column: date & company */}
                <div className="w-1/3 pr-4">
                  <p className="font-semibold">{item.date}</p>
                  <p>{item.company}</p>
                </div>
                {/* right column: position & description */}
                <div className="w-2/3">
                  <h3 className="font-semibold">{item.position}</h3>
                  <p className="mt-2">{item.description}</p>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: "#91d7e3", color: "#1e1e2e" }}
            contentStyle={{ background: "#494d64", color: "#cdd6f4" }}
            contentArrowStyle={{ borderRight: "7px solid #494d64" }}
            icon={<FaHourglassStart />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

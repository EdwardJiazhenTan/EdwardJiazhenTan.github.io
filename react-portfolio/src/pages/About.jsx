import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlide from "../components/ImageSlide.jsx";
import Title from "../components/Title";

const About = () => {
  return (
    <div
      name="about"
      className="flex flex-col items-center py-12 bg-ctp-base h-screen"
    >
      <br /> <br />
      <div className="pt-[100px]">
        <Title> About Me </Title>
      </div>
      <div className="flex flex-wrap justify-center items-start w-full max-w-5xl">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 p-4">
          <br />
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl text-ctp-text">
              I’m <span className="text-ctp-sky font-bold">Edward Tan</span>, a{" "}
              <span className="text-ctp-peach font-bold">
                new-grad software engineer
              </span>{" "}
              (B.S. CS,{" "}
              <span className=" font-bold">University of Rochester</span>
              ).
            </p>
            <br />
            <p className="text-lg md:text-xl text-ctp-text">
              I specialize in{" "}
              <span className="text-ctp-green font-semibold">
                scalable web & cloud systems
              </span>
              ,{" "}
              <span className="text-ctp-teal font-semibold">
                full-stack development
              </span>
              , <span className="text-ctp-yellow font-semibold">DevOps</span>,
              and{" "}
              <span className="text-ctp-mauve font-semibold">3D graphics</span>.
            </p>
            <br />
            <p className="text-lg md:text-xl text-ctp-text">
              Passionate about{" "}
              <span className="text-ctp-red font-semibold">Linux</span> (Arch +
              Hyprland),{" "}
              <span className="text-ctp-sapphire font-semibold">
                ergonomic keyboards
              </span>{" "}
              (Corne, HHKB), and{" "}
              <span className="text-ctp-blue font-semibold">
                immersive games
              </span>{" "}
              (Valorant, CS2, Hearthstone).
            </p>
            <br />
            <p className="text-lg md:text-xl text-ctp-text">
              I thrive in{" "}
              <span className=" font-semibold">collaborative teams</span> and
              tackle{" "}
              <span className=" font-semibold">
                complex engineering challenges
              </span>
              . If you share these interests or need a developer,{" "}
              <span className="text-ctp-yellow font-semibold">
                let’s connect
              </span>
              .
            </p>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className=" md:w-1/2 lg:w-1/3 p-4">
          <div className="w-full text-ctp-subtext1">
            <ImageSlide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

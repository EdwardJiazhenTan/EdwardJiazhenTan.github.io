import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleSetActive = (to) => {
    setActive(to);
  };

  return (
    <div className="fixed w-full h-[50px] flex justify-between items-center px-4 bg-ctp-surface0 text-ctp-subtext1">
      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          {["home", "work", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className={`px-2 rounded ${
                  active === item
                    ? "bg-white text-[#8a8d8c]"
                    : "hover:bg-[#b2b2b2]"
                }`}
                onSetActive={handleSetActive}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social icons */}
      <div className="flex space-x-4">
        <a
          className="flex justify-between items-center text-ctp-sky hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/edward-j-tan/"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className="flex justify-between items-center text-ctp-crust hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/EdwardJiazhenTan"
        >
          <FaGithub size={30} />
        </a>
        <a
          className="flex justify-between items-center text-ctp-rosewater hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:etan7@u.rochester.edu"
        >
          <HiOutlineMail size={30} />
        </a>
        <a
          className="flex justify-between items-center text-ctp-mantle hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="/assets/resume.pdf"
        >
          <BsFillPersonLinesFill size={30} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

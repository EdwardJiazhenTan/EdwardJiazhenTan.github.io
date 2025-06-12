import React, { useState } from 'react';
import { scroller } from "react-scroll";
import Dock from "./Dock";
import useComponentTracker from '../monitoring/useComponentTracker';
import { trackEvent } from '../monitoring';
import {
  VscHome,
  VscBriefcase,
  VscPerson,
  VscProject,
  VscMail,
} from "react-icons/vsc";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const trackNavbar = useComponentTracker('Navbar');

  // helper to scroll to a section with tracking
  const goTo = (section) => {
    trackEvent('navigation', { destination: section });
    trackNavbar(`navigated-to-${section}`);
    scroller.scrollTo(section, { smooth: true, duration: 500 });
  };

  const items = [
    // page links
    { icon: <VscHome size={24} />, label: "Home", onClick: () => goTo("home") },
    {
      icon: <VscBriefcase size={24} />,
      label: "Work",
      onClick: () => goTo("work"),
    },
    {
      icon: <VscPerson size={24} />,
      label: "About",
      onClick: () => goTo("about"),
    },
    {
      icon: <VscProject size={24} />,
      label: "Projects",
      onClick: () => goTo("projects"),
    },
    {
      icon: <VscMail size={24} />,
      label: "Contact",
      onClick: () => goTo("contact"),
    },

    // social icons with tracking
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      onClick: () => {
        trackEvent('social_click', { platform: 'LinkedIn' });
        trackNavbar('clicked-linkedin');
        window.open("https://linkedin.com/in/edward-j-tan", "_blank");
      },
    },
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      onClick: () => {
        trackEvent('social_click', { platform: 'GitHub' });
        trackNavbar('clicked-github');
        window.open("https://github.com/EdwardJiazhenTan", "_blank");
      },
    },
    {
      icon: <VscMail size={24} />,
      label: "Email",
      onClick: () => {
        trackEvent('contact', { method: 'email' });
        trackNavbar('clicked-email');
        window.location = "mailto:etan7@u.rochester.edu";
      },
    },
    {
      icon: <BsFillPersonLinesFill size={24} />,
      label: "Resume",
      onClick: () => {
        trackEvent('resume_view');
        trackNavbar('viewed-resume');
        window.open("/assets/resume.pdf", "_blank");
      },
    },
  ];

  return (
    // position dock wherever you like; here we fix it to bottom
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Navbar;


import React from 'react';
import './HomeMenu.css'; // Make sure to create this CSS file

function HomeMenu() {
  return (
    <div className="home-menu">
      <h1>Edward Tan</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* Add more list items as needed */}
      </ul>
    </div>
  );
}

export default HomeMenu;

import React from 'react';
import './Navbar.css'; // Optional CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Shiva Shanker Dasari</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-cta">
        <a href="/resume.pdf" download className="cta-button">Download Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;

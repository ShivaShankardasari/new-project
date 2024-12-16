import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>Shiva Shanker Dasari</h1>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#skills">Skills</a></li> {/* Link to Skills section */}
        <li><a href="#cards">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

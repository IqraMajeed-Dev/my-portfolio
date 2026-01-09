import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo (Left Side) */}
      <div className="logo">
        <span className="logo-highlight">Iqra</span> 
      </div>

      {/* Centered Navigation Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="about" smooth duration={500} onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="projects" smooth duration={500} onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="achievements" smooth duration={500} onClick={() => setIsOpen(false)}>
          Achievements
        </Link>
        <Link to="contact" smooth duration={500} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Link
          to="contact"
          smooth
          duration={500}
          className="connect-btn"
          onClick={() => setIsOpen(false)}
        >
          <i className="fa-solid fa-paper-plane"></i> Connect With Me
        </Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
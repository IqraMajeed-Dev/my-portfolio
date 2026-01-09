import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="highlight">Iqra Majeed</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <p>
          Passionate about crafting modern, scalable, and user-friendly web & mobile
          applications. Skilled in <strong>React.js, Django, Python, Flutter</strong>,
          and experienced in building end-to-end full-stack solutions.
        </p>

        <div className="hero-buttons">
          <button onClick={handleScrollToProjects} className="btn btn-connect">
            <i className="fa-solid fa-briefcase"></i> View My Work
          </button>
        </div>

        {/* Social Icons */}
        <div className="hero-socials">
          <a
            href="https://github.com/iqramajeed-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https:www.linkedin.com/in/iqra-majeed-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
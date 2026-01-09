import React from "react";
import "./Achievements.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () => {
  const certificates = [
    {
      title: "Python for Everybody (Coursera)",
      link: "https://drive.google.com/file/d/1e3_VJbV3-eoUXPHLgJJi3h9ruxHxFfQK/view?usp=drive_link",
    },
    {
      title: "Full Stack Web Development (UOL)",
      link: "https://drive.google.com/file/d/1wudakuzS29dAfXOsXg4uBjYFUR1R5Fcn/view?usp=drive_link",
    },
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="achievements-title"> Achievements & Certificates</h2>

      {/* ✅ Top Stats Section */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>15</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Certificates</p>
        </div>
        <div className="about-achievement">
          <h1>70+</h1>
          <p>RESTful APIs Created</p>
        </div>
      </div>

      {/* 🎓 Certificates Cards */}
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="view-btn"
            >
              View Certificate <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
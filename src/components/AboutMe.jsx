// import React from "react";
// import "./AboutMe.css";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaPython,
//   FaAws,
//   FaGitAlt,
//   FaNetworkWired,
//   FaLinux,
//   FaTerminal,
// } from "react-icons/fa";
// import {
//   SiDjango,
//   SiFlutter,
//   SiMysql,
//   SiJavascript,
//   SiCplusplus,
//   SiFigma,
//   SiTailwindcss,
//   SiDart,
//   SiUbuntu,
// } from "react-icons/si";

// const skills = [
//   { name: "HTML", icon: <FaHtml5 /> },
//   { name: "CSS", icon: <FaCss3Alt /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//   { name: "JavaScript", icon: <SiJavascript /> },
//   { name: "React.js", icon: <FaReact /> },
//   { name: "Django", icon: <SiDjango /> },
//   { name: "Python", icon: <FaPython /> },
//   { name: "Flutter", icon: <SiFlutter /> },
//   { name: "Dart", icon: <SiDart /> },
//   { name: "MySQL", icon: <SiMysql /> },
//   { name: "AWS", icon: <FaAws /> },
//   { name: "Git", icon: <FaGitAlt /> },
//   { name: "C++", icon: <SiCplusplus /> },
//   { name: "UI/UX", icon: <SiFigma /> },
//   { name: "Cisco Packet Tracer", icon: <FaNetworkWired /> },
//   { name: "Ubuntu", icon: <SiUbuntu /> },
//   { name: "Kali Linux", icon: <FaLinux /> },
//   { name: "Shodan.io", icon: <FaTerminal /> },
// ];

// const Aboutme = () => {
//   return (
//     <div className="about">
//       <div className="about-right">
//         <div className="about-title">
//           <h1>About Me</h1>
//         </div>

//         <div className="about-para">
//           <p>
//             I'm <strong>Iqra Majeed</strong>, a <b>Full Stack Developer</b>{" "}
//             currently pursuing a{" "}
//             <b>Bachelor of Science in Engineering Technology</b> at the
//             University of Lahore. My expertise includes backend development with{" "}
//             <b>Python, Django, and RESTful APIs</b>, along with frontend
//             technologies like <b>React, JavaScript, Tailwind, and Flutter</b>.
//             I'm skilled in database management using <b>MySQL</b> and confident
//             with <b>AWS Cloud</b>.
//           </p>

//           <p>
//             I’ve built multiple full-stack projects — including e-commerce, food
//             ordering, and hotel booking platforms — demonstrating strong{" "}
//             <b>problem-solving</b>, <b>clean code</b>, and{" "}
//             <b>performance optimization</b> skills.
//           </p>
//         </div>

//         {/* 🌟 Technical Skills */}
//         <div className="skills-section">
//           <h2>Technical Skills</h2>
//           <div className="skills-grid">
//             {skills.map((skill, index) => (
//               <div key={index} className="skill-item">
//                 <div className="skill-box">{skill.icon}</div>
//                 <p className="skill-name">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;


import React from "react";
import "./AboutMe.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaAws,
  FaGitAlt,
  FaNetworkWired,
  FaLinux,
  FaTerminal,
} from "react-icons/fa";
import {
  SiDjango,
  SiFlutter,
  SiMysql,
  SiJavascript,
  SiCplusplus,
  SiFigma,
  SiTailwindcss,
  SiDart,
  SiUbuntu,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Dart", icon: <SiDart /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "UI/UX", icon: <SiFigma /> },
  { name: "Cisco Packet Tracer", icon: <FaNetworkWired /> },
  { name: "Ubuntu", icon: <SiUbuntu /> },
  { name: "Kali Linux", icon: <FaLinux /> },
  { name: "Shodan.io", icon: <FaTerminal /> },
];

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-right">
        <div className="about-title">
          <h1>About Me</h1>
        </div>

        <div className="about-para">
          <p>
            I'm <strong>Iqra Majeed</strong>, a <b>Full Stack Developer</b>{" "}
            currently pursuing a{" "}
            <b>Bachelor of Science in Engineering Technology</b> at the
            University of Lahore. My expertise includes backend development with{" "}
            <b>Python, Django, and RESTful APIs</b>, along with frontend
            technologies like <b>React, JavaScript, Tailwind, and Flutter</b>.
            I'm skilled in database management using <b>MySQL</b> and confident
            with <b>AWS Cloud</b>.
          </p>

          <p>
            I’ve built multiple full-stack projects — including e-commerce, food
            ordering, and hotel booking platforms — demonstrating strong{" "}
            <b>problem-solving</b>, <b>clean code</b>, and{" "}
            <b>performance optimization</b> skills.
          </p>
        </div>

        {/* 🌟 Technical Skills */}
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-box">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

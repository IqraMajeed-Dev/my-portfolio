
import React from "react";
import "./Projects.css";
import { FaCloud } from "react-icons/fa";

import {
  FaGithub,
  FaReact,
  FaPython,
  FaAws,
  FaShoppingCart,
  FaUtensils,
  FaKey,
  FaTachometerAlt,
  FaGlobe,
} from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Web Platform (Full Stack)",
    date: "May 2025",
    description: `Developed and deployed a scalable e-commerce web platform.
Built RESTful APIs in Django for smooth data exchange.
Integrated payment gateways and secure authentication.`,
    link: "https://github.com/IqraMajeed-Dev/Ziksha-style.git",
    tech: ["React.js", "Django", "MySQL", "AWS"],
    icon: <FaShoppingCart />,
  },

  {
    title: "Zyora Full Stack Clothing Web App",
    date: "May 2025",
    description: `Developed a modern full-stack clothing web application using React.js and Django.
Includes product management, user authentication, cart, and checkout functionality.
Focused on a clean UI, RESTful backend integration, and responsive design.`,
    link: "https://github.com/IqraMajeed-Dev/Zyora-Full-Stack-Clothing-Web-App.git",
    tech: ["React.js", "Django", "MySQL", "Tailwind CSS"],
    icon: <FaShoppingCart />,
  },

  {
    title: "Flutter Meal App with Django Backend",
    date: "April 2025",
    description: `Developed a cross-platform meal app using Flutter with Django as the backend.
Features include browsing meals by category, adding favorites, and managing meal details.
Django REST Framework used for APIs; Flutter ensures smooth mobile experience.`,
    link: "https://github.com/IqraMajeed-Dev/flutter_meal_app_django_backend.git",
    tech: ["Flutter", "Django", "REST API"],
    icon: <FaUtensils />,
  },

  {
    title: "Cross-Platform E-Commerce Application",
    date: "April 2025",
    description: `Cross-platform app using Flutter, Django, and React.js.
Includes product catalog, shopping cart, and checkout.`,
    link: "https://github.com/IqraMajeed-Dev/Cross-Platform-E-Commerce-Application.git",
    tech: ["Flutter", "React.js", "Django"],
    icon: <FaShoppingCart />,
  },

  {
    title: "Dashboard for Lead Management System",
    date: "March 2025",
    description: `Developed an interactive dashboard to manage sales leads and client data.
Features include lead tracking, status updates, data analytics, and admin control.
Built with React.js and Node.js for dynamic performance and scalability.`,
    link: "https://github.com/IqraMajeed-Dev/Dashboard-Management-system.git",
    tech: ["React.js", "Node.js", "Tailwind CSS"],
    icon: <FaTachometerAlt />,
  },

  {
    title: "Property Leads Management System",
    date: "March 2025",
    description: `A complete Property Leads Management System for tracking real-estate leads.
Features include lead creation, client details, contact tracking, filtering, and status updates.
Built with React.js for the frontend and Node.js for backend APIs.`,
    link: "https://github.com/IqraMajeed-Dev/Property-Leads-Management-System.git",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    icon: <FaTachometerAlt />,
  },

  {
    title: "Seamless Food Ordering Platform (FEASTFLOW)",
    date: "Feb 2025",
    description: `Final Year Project: food ordering system using React.js, Flutter, and Django.
Features: cart, checkout, live order tracking, admin panel.`,
    link: "https://github.com/IqraMajeed-Dev/Seamless-Food-Ordering-Platform-FEASTFLOW-.git",
    tech: ["React.js", "Flutter", "Django", "AWS"],
    icon: <FaUtensils />,
  },

  {
    title: "Advanced Password Generator (Python)",
    date: "Jan 2025",
    description: `Secure password generator built with Python.
Custom length and complexity options for strong passwords.`,
    link: "https://github.com/IqraMajeed-Dev/Advanced-Password-Generator",
    tech: ["Python"],
    icon: <FaKey />,
  },

  // ⭐ NEW PROJECT: CGPA Calculator
  {
    title: "CGPA Calculator (React.js)",
    date: "Jan 2025",
    description: `A simple and interactive CGPA Calculator built using React.js.
Allows users to add subjects, enter credit hours and grade points, and calculate GPA & CGPA instantly.
Features a clean UI, responsive layout, and real-time calculation using React hooks.`,
    link: "https://github.com/IqraMajeed-Dev/CGPA-CALCULATOR.git",
    tech: ["React.js", "JavaScript", "CSS"],
    icon: <FaReact />,
  },

  // ⭐ NEW PROJECT: WEATHER SCOPE APP
  {
    title: "Weather Scope App (React.js)",
    date: "Jan 2025",
    description: `A modern and responsive Weather App built with React.js. 
Allows users to search any city and get real-time weather details including temperature, humidity, wind speed, and weather conditions.
Uses an external weather API and React hooks for dynamic and smooth UI updates.`,
    link: "https://github.com/IqraMajeed-Dev/WEather-scope-app.git",
    tech: ["React.js", "API Integration", "CSS"],
    icon: <FaCloud />,
  },

  {
    title: "Todo App (React + Django)",
    date: "Jan 2025",
    description: `Developed a full-stack Todo App using React.js and Django.
Features include task creation, completion tracking, and dynamic UI updates.
Focused on clean component structure and efficient API integration.`,
    link: "https://github.com/IqraMajeed-Dev/Todo--App.git",
    tech: ["React.js", "Django", "REST API"],
    icon: <FaReact />,
  },

  {
    title: "Landing Page in React",
    date: "Dec 2024",
    description: `Designed and developed a responsive landing page using React.js.
Implemented smooth scrolling, modern animations, and reusable UI components.
Optimized layout for all screen sizes with Tailwind CSS styling.`,
    link: "https://github.com/IqraMajeed-Dev/Landing-Page-in-React.git",
    tech: ["React.js", "Tailwind CSS"],
    icon: <FaGlobe />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-icon-wrapper">{proj.icon}</div>

            <h3 className="project-title">{proj.title}</h3>
            <p className="date">{proj.date}</p>
            <p className="desc">{proj.description}</p>

            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
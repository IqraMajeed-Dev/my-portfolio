
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:iqra37277@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (%0D%0A From: ${formData.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="contact-card">
            <FaMapMarkerAlt className="icon" />
            <p>Lahore, Punjab, Pakistan</p>
          </div>

          <div className="contact-card">
            <FaWhatsapp className="icon" />
            <a href="https://wa.me/923096032412" target="_blank" rel="noreferrer">
              +92 309 6032412
            </a>
          </div>

          <div className="contact-card">
            <MdEmail className="icon" />
            <a href="mailto:iqra37277@gmail.com">iqra37277@gmail.com</a>
          </div>
        </div>

        {/* Contact Form (Card Style) */}
        <div className="contact-form-card">
          <h3 className="form-title">Send a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
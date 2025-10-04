import React from 'react';
import './About.css';

/**
 * About Component
 * 
 * This section provides a brief introduction about Dr. Blake Head.
 * It's the first content section visitors see after the header.
 */
function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Welcome! I'm Dr. Blake Head, and this is my professional website 
            showcasing my academic journey, research interests, and expertise.
          </p>
          <p>
            This site serves as a portfolio of my skills, courses I've completed 
            or taught, and my current research endeavors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

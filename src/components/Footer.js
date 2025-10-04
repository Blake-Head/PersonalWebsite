import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * 
 * The footer appears at the bottom of the page and contains
 * copyright information and optional contact/social links.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Dr. Blake Head. All rights reserved.</p>
        <p className="footer-note">Built with React</p>
      </div>
    </footer>
  );
}

export default Footer;

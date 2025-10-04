import React from 'react';
import './Header.css';

/**
 * Header Component
 * 
 * This is the top navigation bar for the website.
 * It contains the site title and navigation links that allow users
 * to jump to different sections of the page.
 */
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Dr. Blake Head</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#courses">Courses</a>
          <a href="#research">Research</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

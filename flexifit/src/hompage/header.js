// Header.js

import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">FlexiEats</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">login</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <button className="cta-button">Get Started</button>
    </header>
  );
};

export default Header;
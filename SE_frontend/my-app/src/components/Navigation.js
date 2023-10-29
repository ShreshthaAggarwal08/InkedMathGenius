import React, { useState } from "react";
import {Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className="main-nav">
    <div className="logo">
          <h4>
              InkedMathGenius
          </h4>
        </div>
      <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
        <ul>
        <li>
          <Link to="/header">Home</Link>
        </li>
        <li>
          <Link to="/services">Service</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
         </li>
         <li>
        <Link to="/signUp"><button className="btn">Sign Up</button>
        </Link>
        </li>
        <li>
        <Link to="/logIn">
          <button className="btn">Login</button>
        </Link>
        </li>
  </ul>
  </div>
  <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            </a>
          </div>
    
    </nav>
    </>
  );
}
import React from "react";
import "../styles/landing.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-box">स</div>
        <span>Smriti (स्मृति)</span>
      </div>

      <div className="nav-right">
        <span>Feedback</span>
        <span>Aaditya Shirke</span>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
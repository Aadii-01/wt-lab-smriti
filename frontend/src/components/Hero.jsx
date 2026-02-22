import React from "react";
import "../styles/landing.css";

function Hero() {
  return (
    <div className="hero">
      <div className="badge">● ONLINE ASSESSMENT</div>
      <h1>Comprehensive Cognitive Screening</h1>
      <p>
        Accessible and professional cognitive assessments to help identify
        potential concerns early.
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">View Assessments</button>
        <button className="secondary-btn">Get Started →</button>
      </div>
    </div>
  );
}

export default Hero;
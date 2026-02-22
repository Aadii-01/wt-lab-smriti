import React from "react";
import "../styles/landing.css";

function Card({ title, desc }) {
  return (
    <div className="card">
      <div className="card-icon">📄</div>
      <div className="active-badge">Active</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="begin-btn">Begin Test →</button>
    </div>
  );
}

export default Card;
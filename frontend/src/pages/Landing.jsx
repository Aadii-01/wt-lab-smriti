import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../styles/landing.css";

const assessments = [
  {
    title: "Image Description Test",
    desc: "Describe a randomly shown image verbally for 1 minute"
  },
  {
    title: "Addenbrooke's Cognitive Examination III (ACE-III)",
    desc: "Comprehensive cognitive assessment for dementia screening"
  },
  {
    title: "Montreal Cognitive Assessment (MoCA)",
    desc: "Assessment for detection of mild cognitive impairment"
  },
  {
    title: "Clinical Dementia Rating (CDR)",
    desc: "Evaluate cognitive and functional abilities"
  },
  {
    title: "Mini-Mental State Examination (MMSE)",
    desc: "Standardized screening tool for cognitive impairment"
  }
];

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <Hero />

      <div className="assessment-section">
        <h2>Available Assessments</h2>
        <p>Choose a cognitive assessment test to begin</p>

        <div className="card-grid">
          {assessments.map((item, index) => (
            <Card key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>

      <footer className="footer">
        © 2025 Smriti (स्मृति). All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
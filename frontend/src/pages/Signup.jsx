import React from "react";
import "./auth.css";

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-box large">
        <div className="logo">स</div>
        <h2>Create Participant Account</h2>
        <p className="link-text">
          Already have an account? <span>Sign in here</span>
        </p>

        <div className="section">
          <h4>Basic Information</h4>

          <label>Email address</label>
          <input type="email" />

          <label>Full Name</label>
          <input type="text" />

          <label>Contact Number</label>
          <input type="text" />

          <label>Age</label>
          <input type="number" />
        </div>

        <div className="section">
          <h4>Security</h4>

          <div className="row">
            <div>
              <label>Password</label>
              <input type="password" />
            </div>

            <div>
              <label>Confirm Password</label>
              <input type="password" />
            </div>
          </div>
        </div>

        <button className="primary-btn">Create Account</button>
      </div>
    </div>
  );
}

export default Signup;
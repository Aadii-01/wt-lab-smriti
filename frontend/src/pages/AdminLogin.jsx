import React from "react";
import "./auth.css";

function AdminLogin() {
  return (
    <div className="auth-container">
      <div className="admin-box">
        <h2>Admin Login</h2>
        <p className="link-text">Participant Login</p>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="gradient-btn">Sign in</button>
      </div>
    </div>
  );
}

export default AdminLogin;
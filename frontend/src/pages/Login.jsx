import React from "react";
import "./auth.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="logo">स</div>
        <h2>Participant Login</h2>
        <p className="link-text">
          New here? <span>Create an account</span>
        </p>

        <label>Email address</label>
        <input type="email" placeholder="you@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button className="primary-btn">Sign in</button>

        <p className="admin-link">Admin Login →</p>
      </div>
    </div>
  );
}

export default Login;
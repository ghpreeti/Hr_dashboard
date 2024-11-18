import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <main className="home-page">
      <div className="card">
        <h2 className="card-title">Welcome to SInterview.ai</h2>
        <p className="card-description">
          Empowering businesses to hire the best candidates with AI-driven interview management.
        </p>
        <div className="buttons-container">
          <Link to="/login">
            <button className="button login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="button signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

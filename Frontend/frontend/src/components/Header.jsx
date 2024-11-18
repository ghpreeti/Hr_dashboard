import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#282c34",
        color: "white",
      }}
    >
      <div>
        <h1>SInterview.ai</h1>
      </div>
      <div>
        <Link
          to="/login"
          style={{ marginRight: "15px", color: "#61dafb", textDecoration: "none" }}
        >
          Login
        </Link>
        <Link to="/signup" style={{ color: "#61dafb", textDecoration: "none" }}>
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;

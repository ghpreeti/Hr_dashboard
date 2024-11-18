import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StudentPage.css";

const StudentPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleAgree = () => {
    setAgreed(!agreed);
  };

  const startInterview = () => {
    if (agreed) {
      alert("All the best for your interview!");
    } else {
      alert("Please agree to the instructions first.");
    }
  };

  return (
    <div className="student-page">
      <div className="card">
        {!isLoggedIn ? (
          <>
            <h2>Student Login</h2>
            <div>
              <Link to="/student/login">
                <button className="button">Login</button>
              </Link>
            </div>
            <div>
              <Link to="/student/signup">
                <button className="button">Sign Up</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h2>Instructions for Interview</h2>
            <p>Please read the instructions below:</p>
            <ol>
              <li>Make sure you are in a quiet environment.</li>
              <li>Have your ID proof ready for verification.</li>
              <li>Follow the interviewer's questions carefully.</li>
            </ol>
            <label>
              <input type="checkbox" checked={agreed} onChange={handleAgree} /> I have read and understood the instructions.
            </label>
            <br />
            <button onClick={startInterview} className="button">
              Start Interview
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentPage;

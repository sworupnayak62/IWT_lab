import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className="main-nav">

        <div className="logo">
          <h2>
            <span>QuizMania</span>
          </h2>
        </div>

        <div className= "menu-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/">Profile</a>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
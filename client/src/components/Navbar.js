import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="" alt="..."></img>
        <h4>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fafafa",
              "&:hover": { color: "blue" },
            }}
          >
            Priyanshu
          </Link>
        </h4>
      </div>
      <div className="options">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </div>
      <div className="contact">
        <ul>
          <li>
            <Link to="https://www.instagram.com/priyanshu_4650/?next=%2Fdirectory%2Fprofiles%2F">
              Instagram
            </Link>
          </li>
          <li>
            <Link to="/linkedin">LinkedIn</Link>
          </li>
          <li>
            <Link to="https://www.github.com/Priyanshu4650">Github</Link>
          </li>
          <li>
            <Link to="https://www.codeforces.com/Anonymous4650">
              CodeForces
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

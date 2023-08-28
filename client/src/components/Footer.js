import React from "react";
// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="stuff">
          <h3>Say Hi</h3>
          <ul>
            <li>
              Instagram
              {/* <Link to="/instagram">Instagram</Link> */}
            </li>
            <li>
              Instagram
              {/* <Link to="/instagram">instagram</Link> */}
            </li>
            <li>
              Instagram
              {/* <Link to="/instagram">instagram</Link> */}
            </li>
          </ul>
        </div>
        <div className="copy">
          <h3>Have a look at this</h3>
          <ul>
            <li>My Work</li>
            <li>My Work</li>
            <li>My Work</li>
          </ul>
        </div>
      </div>
      <div
        className="container"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "absolute",
          left: "40% !important",
        }}
      >
        &copy; Priyanshu 2023
      </div>
    </>
  );
}

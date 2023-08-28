import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="details" style={{ backgroundColor: "#53585f" }}>
        <div className="my-info">
          <h1>Hi! Priyanshu here</h1>
          <p>
            A software developer / web developer based in India pursuing B.Tech
            from IIT Palakkad
          </p>
          <span className="resume">
            <Link to="https://drive.google.com/file/d/14oKGHOJN-30A7bpriOpCHXFqQTHKoSOV/view?usp=sharing">
              Resume
            </Link>
          </span>
        </div>
        <hr />
        <div className="picture">
          <img src="" alt="..."></img>
        </div>
      </div>
      <hr />
      <div className="container">
        <h6 className="container d-flex">My Skills</h6>
      </div>
      <div className="skills container d-flex">
        <div className="d-flex">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Python</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">C++</p>
            </div>
          </div>

          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">C</p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">MERN Stack</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="work-content container d-flex">
        <Link to="/work">
          <div class="card" style={{ width: "18rem" }}>
            <h1>My Work</h1>
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </Link>
        <Link to="/content">
          <div class="card" style={{ width: "18rem" }}>
            <h1>My Content</h1>
            <img src="..." class="card-img-top" alt="..." />
          </div>
        </Link>
      </div>
    </>
  );
}

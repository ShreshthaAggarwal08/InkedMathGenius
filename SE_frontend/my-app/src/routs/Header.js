import React from "react";
import { Link } from "react-router-dom";
import tools from "../img/Maths.jpeg";
import img1 from "../img/Attachment.jpeg";
import img2 from "../img/box.jpeg";
import img3 from "../img/Drive.jpeg";
export default function Header() {
  return (
    <header>
      <h2>Handwritten</h2>
      <h2>Equation</h2>
      <h2>Solver</h2>
      <p>
      Welcome to InkedMathGenius. Upload math challenges and get quick, accurate solutions.
      </p>
      <Link to="/about">
        <button className="btn">Choose file</button>
      </Link>
      <div className="choosing-file">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
      <div className="home-bannerImage-container">
            <img src={tools} alt="" />
        </div>
    </header>
  );
}
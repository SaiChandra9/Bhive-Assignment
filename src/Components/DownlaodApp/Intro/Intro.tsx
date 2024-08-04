import React from "react";
import "./index.css";
export default function Intro() {
  return (
    <div>
      <div className="wrapper-one">
        <div className="img-wrapper">
          <img src={require("./intro-image.jpeg")} alt="Intro"></img>
          <div className="text-content">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="highlight">₹199/-!</span>
          </div>
        </div>
        <div className="right-image-wrapper">
          <img src={require("./image.png")} className="main-image"></img>
        </div>
      </div>
    </div>
  );
}

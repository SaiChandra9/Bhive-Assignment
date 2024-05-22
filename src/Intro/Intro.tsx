import React from "react";
import "./index.css";
export default function Intro() {
  const logo: string = require("./bg-image.png");

  return (
    <div>
      <div className="left-img">
        <img src={logo}></img>
        <div className="text-content">
          Host your meeting with world-class amenities. Starting at ₹199/-!
        </div>
      </div>
    </div>
    // <div className="container">
    //   <div className="text">
    //     Host your meeting with world-class amenities. Starting at ₹199/-!
    //   </div>
    //   <div className="left-img"></div>
    // </div>
  );
}

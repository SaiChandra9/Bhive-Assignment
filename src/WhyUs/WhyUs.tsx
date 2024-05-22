import React from "react";
import "./index.css";

export default function WhyUs() {
  const logo: string = require("./Vector-1-1.png").default;
  return (
    <div className="why-us-wrapper">
      Why Choose Us
      <div className="first-row-wrapper">
        <div className="first-row-elements">
          <img src="logo" alt="render"></img>
          Community Events
        </div>
        <div className="first-row-elements">Gym Facilitites</div>
        <div className="first-row-elements">High-Speed Wifi</div>
        <div className="first-row-elements">Cafe & Tea Bar</div>
      </div>
      <div className="second-row-wrapper">
        <div className="second-row-elements">Affordable</div>
        <div className="second-row-elements">Comfort Loungues</div>
        <div className="second-row-elements">Quick Booking</div>
        <div className="second-row-elements">Sports Area</div>
      </div>
    </div>
  );
}

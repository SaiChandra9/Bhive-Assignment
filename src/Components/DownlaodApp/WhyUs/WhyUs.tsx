import React from "react";
import "./index.css";

type Feature = {
  src: string;
  alt: string;
  text: string;
};

export default function WhyUs() {
  const features: Feature[] = [
    {
      src: require("./community.png"),
      alt: "Community Events",
      text: "Community Events",
    },
    {
      src: require("./gym-icon.png"),
      alt: "Gym Facilities",
      text: "Gym Facilities",
    },
    {
      src: require("./wifi.png"),
      alt: "High-Speed Wifi",
      text: "High-Speed Wifi",
    },
    {
      src: require("./coffee.png"),
      alt: "Cafe & Tea Bar",
      text: "Cafe & Tea Bar",
    },
    { src: require("./currency.png"), alt: "Affordable", text: "Affordable" },
    {
      src: require("./lounge.png"),
      alt: "Comfort Lounges",
      text: "Comfort Lounges",
    },
    {
      src: require("./booking.png"),
      alt: "Quick Booking",
      text: "Quick Booking",
    },
    { src: require("./sports.png"), alt: "Sports Area", text: "Sports Area" },
  ];

  return (
    <div className="why-us-wrapper">
      <p className="why-us-title">Why Choose Us</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.src} alt={feature.alt} />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

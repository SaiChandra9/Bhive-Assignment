import React from "react";
import Header from "./Components/DownlaodApp/Header/header";
import Intro from "./Components/DownlaodApp/Intro/Intro";
import WhyUs from "./Components/DownlaodApp/WhyUs/WhyUs";
import SpaceOverview from "./Components/DownlaodApp/SpaceOverview/SpaceOverview";
import DownloadApp from "./Components/DownlaodApp/DownloadApp";
import Footer from "./Components/DownlaodApp/Footer/Footer";
import "./index.css";

export default function SeatBooking() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="main-wrapper"
    >
      <Header />
      <Intro />
      <div className="head-intro-why-wrapper">
        <WhyUs />
        {/* need to space overview */}
        <SpaceOverview />
        <DownloadApp />
      </div>
      <Footer />
    </div>
  );
}

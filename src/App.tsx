import React from "react";
import logo from "./logo.svg";
import Header from "./Header/header";
import Intro from "./Intro/Intro";
import WhyUs from "./WhyUs/WhyUs";
import "./App.css";

// Components to be created
// 1.HEADER
// 2.HEADING
// 3.why choose us
// 4.space overview
// 5.downlaod app
// 6.footer

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Intro />
      <WhyUs />
    </div>
  );
}

export default App;

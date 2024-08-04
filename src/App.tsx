import React from "react";
import SeatBooking from "./SeatBooking";
import "./App.css";
import { LocationProvider } from "./Context/LocationContext";
// Components to be created
// 1.HEADER
// 2.HEADING
// 3.why choose us
// 4.space overview
// 5.downlaod app
// 6.footer

function App() {
  return (
    <LocationProvider>
      <SeatBooking />
    </LocationProvider>
  );
}

export default App;

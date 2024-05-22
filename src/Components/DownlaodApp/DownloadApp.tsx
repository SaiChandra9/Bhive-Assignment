import React from "react";
import logo from "./image.png";
import playStore from "./playstore.png";
import appStore from "./appstore.png";
import "./index.css";
export default function DownloadApp() {
  return (
    <div>
      <div>Download our app now</div>
      <div className="wrapper">
        <div></div>
        <div className="img-div">
          <img src={logo} alt="hide" className="img-logo"></img>
        </div>
        <div className="content-wrapper">
          <div>
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </div>
          <div className="download-store-wrapper">
            <div className="play-store-img-wrapper">
              <img src={playStore} className="store-img" />
            </div>
            <div className="app-store-img-wrapper">
              <img src={appStore} className="store-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

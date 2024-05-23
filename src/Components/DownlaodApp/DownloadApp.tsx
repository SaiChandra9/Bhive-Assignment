import React from "react";
import logo from "./image.png";
import playStore from "./playstore.png";
import appStore from "./appstore.png";
import "./index.css";
export default function DownloadApp() {
  // return (
  //   <div>
  //     <div>Download our app now</div>
  //     <div className="wrapper">
  //       <div></div>
  //       <div className="img-div">
  //         <img src={logo} alt="hide" className="img-logo"></img>
  //       </div>
  //       <div className="content-wrapper">
  //         <div>
  //           Boost your productivity with the BHIVE Workspace app. Elevate your
  //           workspace, collaborate efficiently, and unlock exclusive perks.
  //         </div>
  //         <div className="download-store-wrapper">
  //           <div className="play-store-img-wrapper">
  //             <img src={playStore} className="store-img" />
  //           </div>
  //           <div className="app-store-img-wrapper">
  //             <img src={appStore} className="store-img" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="container">
      <div>
        <h2 className="heading">Download our app now</h2>
      </div>
      <div className="content">
        <div className="image-container">
          <img src={logo} alt="BHIVE Workspace App" className="image" />
        </div>
        <div className="text-container">
          <p className="text">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="buttons-container">
            <a href="https://play.google.com" className="button-play-store">
              <img
                src={playStore}
                alt="Get it on Google Play"
                className="store-badge"
              />
            </a>
            <a href="https://www.apple.com/app-store/" className="button-app-store">
              <img
                src={appStore}
                alt="Download on the App Store"
                className="store-badge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

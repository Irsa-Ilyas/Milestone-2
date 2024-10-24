import React from "react";

function Hero() {
  return (
    <div>
      <div
        style={{
          zIndex: "-1",
          backgroundImage: "url('/assets/bannerremover.png')",
          height: "740px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div className="input">
          <div>
            <div className="inputdiv">
              <input type="text" placeholder="Destination"></input>
              <input type="text" placeholder="Tour Type"></input>
              <input type="text" placeholder="Month"></input>
              <input type="button" value={"Search"}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;

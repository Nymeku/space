import React, {useState} from "react";
import MiniNavbar from "../mini-nav-bar/mininavbar";
import "./which.scss";
import '../planet/planet.scss'
import PlanetInfos from "../planet-infos/planet-infos";

function Which() {
  const [currentPlanet, setCurrentPlanet] = useState("moon");

  return (
    <>
      <div className="planet-container">
        <img key={currentPlanet} src={"/assets/destination/image-"+currentPlanet+".png"} alt="planet" />
      </div>
      <div className="which-container">
        <MiniNavbar currentPlanet={currentPlanet} setCurrentPlanet={setCurrentPlanet} />
        <PlanetInfos currentPlanet={currentPlanet} />
      </div>
    </>
  );
}

export default Which;

import React from "react";
import "./ship-infos.scss";
import * as data from "../../../data.json";

function ShipInfos({ currentShip }) {
  const ship = data.technology.find(
    item => item.name === currentShip
  );

  return (
    <div className="nairi">
      <div className="ship-text">
        <p className="terminology">THE TERMINOLOGY...</p>
        <p className="name">{ship.name.toUpperCase()}</p>
        <p className="description">{ship.description}</p>
      </div>
      <img src={"/assets" + ship.images.portrait} alt="ship" />
    </div>
  );
}

export default ShipInfos;

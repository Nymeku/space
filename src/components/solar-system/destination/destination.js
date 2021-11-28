import React from "react";
import Navbar from "../../navbar";
import "./destination.scss";
import Pick from "../pick/pick";
import Which from "../which/which";


function Destination() {
// const PlanetContext = React.createContext(undefined);

  return (
    <>
      <div className="destination-container">
        <Navbar />
        <Pick tag="01" text="pick your destination"/>
        <div className="planets-container">

            <Which />

        </div>
      </div>
    </>
  );
}

export default Destination;

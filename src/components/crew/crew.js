import React from "react";
import Navbar from "../navbar";
import Pick from "../solar-system/pick/pick";
import Crewmate from "./crewmate/crewmate";
import "./crew.scss";

function Crew() {
  return (
    <div className="crew-container">
      <Navbar />
      <div className="crew-inner">
        <Pick tag="02" text="meet your crew" />
        <div className="emmanuel">
          <Crewmate />
        </div>
      </div>
    </div>
  );
}

export default Crew;

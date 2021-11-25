import React, { useEffect, useState } from "react";
import "./planet.scss";
import * as data from "../../../data.json";

function Planet() {
  const [source, setSource] = useState("");
  let planet = "Moon"

  useEffect(() => {
    data.destinations.forEach((item) => {
      if (item.name === planet) {
        setSource('/assets'+item.images.png);
      }
    });
  }, [source, planet]);

  console.log("source", source);
  return (
    <div className="planet-container">
      <img src={source} alt="planet" />
    </div>
  );
}

export default Planet;

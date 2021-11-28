import React from "react";
import * as data from "../../../data.json";

let total = new Array(data.technology.length).fill(1).map((_,i) => i+1)
const Ship = ({ name, description, portrait }) => {
  return (
    <>
      <div className="nairi">
        <div className="ship-text">
          <p className="terminology">THE TERMINOLOGY...</p>
          <p className="name">{name.toUpperCase()}</p>
          <p className="description">{description}</p>
        </div>
        <img src={"/assets" + portrait} alt="ship" />
      </div>
    </>
  );
};


const Bubble = ({ number }) => {
  return <div className="bubble-container">{number + 1}</div>;
};

function TechnologyText() {
  return (
    <>
      <div className="principal-container">
        <div className="pagination-container">
          {data.technology.map((_, i) => (
            <Bubble number={i} key={i} />
          ))}
        </div>
        <div className="ship-container">
          {data.technology.map((ship) => (
            <Ship
              name={ship.name}
              description={ship.description}
              portrait={ship.images.portrait}
              key={ship.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TechnologyText;

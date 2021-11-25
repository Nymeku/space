import React from "react";
import "./mininavbar.scss";

const planets = ["moon", "mars", "europa", "titan"];
function MiniNavbar({currentPlanet, setCurrentPlanet}) {
  
  return (
    <div className="mininavbar-outter">
      {planets.map((item) =>
        currentPlanet === item ? (
          <p className="active" key={item}>
            {item.toUpperCase()}
          </p>
        ) : (
          <p
            className="inactive"
            key={item}
            onClick={() => setCurrentPlanet(item)}
          >
            {item.toUpperCase()}
          </p>
        )
      )}
    </div>
  );
}

export default MiniNavbar;

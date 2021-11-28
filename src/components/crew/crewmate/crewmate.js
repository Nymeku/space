import React, { useEffect, useRef } from "react";
import "./crewmate.scss";
import * as data from "../../../data.json";

const Profil = ({ name, role, bio, photo }) => {
  const crewmateRef = useRef(null)
  useEffect(() => {

    let tableau = [0]
    for(let i=0; i<10; i++){tableau.push(tableau[i] + .1)}
    var observer = new IntersectionObserver(([el]) => {
        el.target.style.opacity = el.intersectionRatio
    }, {root: crewmateRef.current.parentElement, threshold:tableau})
    observer.observe(crewmateRef.current)
  });

  return (
    <div className="crewmate-container" ref={crewmateRef}>  
      <div className="text">
        <p className="role">{role.toUpperCase()}</p>
        <p className="name">{name.toUpperCase()}</p>
        <p className="bio">{bio}</p>
      </div>
      <img src={"/assets" + photo} alt="crewmate" />
    </div>
  );
};

function Crewmate() {
  return (
    <>
      {data.crew.map((crewmate) => (
        <Profil
          name={crewmate.name}
          bio={crewmate.bio}
          role={crewmate.role}
          photo={crewmate.images.png}
          key={crewmate.name}
        />
      ))}
    </>
  );
}

export default Crewmate;

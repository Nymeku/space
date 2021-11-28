import React from "react";
import Navbar from "../navbar";
import ExploreButton from "./button/explore-button";
import Hero from "./hero/hero";
import "./explore.scss";

function Explore() {
  return (
    <>
    <main className="explore-container"  >
      <Navbar />
      <div className="adventurous" >
        <Hero />
        <ExploreButton />
      </div>
    </main>
    <div id="transition">
    </div>
    </>
  );
}

export default Explore;

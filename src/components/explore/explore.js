import React from "react";
import Navbar from "../navbar";
import Text from "./text";
import ExploreButton from "./explore-button";
import "./explore.scss";

function Explore() {
  return (
    <main className="explore-container">
      <Navbar />
      <div className="adventurous">
        <Text />
        <ExploreButton />
      </div>
    </main>
  );
}

export default Explore;

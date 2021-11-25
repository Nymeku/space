import React from "react";
import "./pick.scss";

function Pick({tag, text}) {
  return (
    <div className="pick">
      <span>{tag}</span>
      <p>{text.toUpperCase()}</p>
    </div>
  );
}

export default Pick;

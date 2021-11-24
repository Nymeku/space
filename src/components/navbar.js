import React from "react";
import "./navbar.scss";
import "../../public/assets/shared/logo.svg";

const Navbar = () => {
  const active = window.location.href.split("/")[3];

  const Onglet = (path, numbers, text) => {
    return (
      <a href={path}>
        <span>{numbers}</span> {text}
      </a>
    );
  };

  const OngletActive = (path, numbers, text) => {
    return (
      <a href={path} className="active">
        <span>{numbers}</span> {text}
      </a>
    );
  };

  return (
    <div className="outter-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <hr className="line" />
      <div className="navbar-container">
        <div className="navbar-inner">
          {active === ""
            ? OngletActive("/", "00", "HOME")
            : Onglet("/", "00", "HOME")}
          {active === "destination"
            ? OngletActive("/destination", "01", "DESTINATION")
            : Onglet("/destination", "01", "DESTINATION")}
          {active === "crew"
            ? OngletActive("/crew", "02", "CREW")
            : Onglet("/crew", "02", "CREW")}
          {active === "technology"
            ? OngletActive("/technology", "03", "TECHNOLOGY")
            : Onglet("/technology", "03", "TECHNOLOGY")}
        </div>
      </div>

    </div>
  );
};

export default Navbar;

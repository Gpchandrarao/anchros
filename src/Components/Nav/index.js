import React from "react";
import logo from "../../Assets/image 1.svg";
import "./index.css";

const Nav = () => {
  return (
    <div className="nav ">
      <img src={logo} alt="logo images" className="nav-img" />
      <h1 className="nav-heading">ANONYMOUS</h1>
    </div>
  );
};

export default Nav;

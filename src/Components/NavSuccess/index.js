import React from "react";
import logo from "../../Assets/image 1.svg";
import "./index.css";
import { Link } from "react-router-dom";

const NavSuccess = () => {
  const name = localStorage.getItem("userName");
  return (
    <div className="nav-seccess">
      <div className="nav-seccess-cotents">
        <Link to="/" className="link">
          <img src={logo} alt="logo images" className="nav-success-img" />
        </Link>
        <h1 className="nav-success-heading">ANONYMOUS</h1>
      </div>
      <div>Welcome, {name}</div>
    </div>
  );
};

export default NavSuccess;

import React from "react";
import Nav from "../Nav";
import "./index.css";
import homeLog from "../../Assets/Vector.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="home-cotents">
        <div className="home-heading-container">
          <img src={homeLog} alt="home-logo" className="home-logo" />
          <p className="home-heading">For Indian Users Only</p>
        </div>
        <h1 className="home-heading-2">
          Start posting anonymously where no one will judge.
        </h1>
        <p className="stranger">Welcome to Stranger discussion forum</p>
        <Link to="/create-account" className="link">
          <button type="button" className="create-account">
            Create Your Account <span className="arrow">&#8594;</span>
          </button>
        </Link>
        <p className="login-but">
          Already have account?{" "}
          <Link to="/dashboard" className="link">
            <span className="have-account">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./index.css";
import NavSuccess from "../NavSuccess";
import { Link } from "react-router-dom";
import accountSuccess from "../../Assets/Group.svg";

const Account = () => {
  return (
    <div className="account">
      <NavSuccess />
      <div className="account-cotents">
        <div className="account-container">
          <img
            src={accountSuccess}
            alt="accountSuccess"
            className="account-logo"
          />
          <h1 className="account-heading">Accont Create Successfully</h1>
          <Link to="/dashboard" className="link">
            <button type="button" className="account-continue">
              Create Your First Post <span className="arrow">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;

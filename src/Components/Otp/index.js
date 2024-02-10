import React, { useState } from "react";
import Nav from "../Nav";
import "./index.css";
// import { Link } from "react-router-dom";
import loginLogo from "../../Assets/Vector.svg";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const otp = localStorage.getItem("otp");
  const [otpInput, setOtp] = useState(otp);
  const navigate = useNavigate();

  const heandileOtp = (eavnt) => {
    setOtp(otp);
  };

  const handelOtpSubmit = (event) => {
    event.preventDefault();
    if (otp.length === 4) {
      navigate("/success/account");
    }
  };
  return (
    <div className="otp">
      <Nav />
      <div className="otp-cotents">
        <form className="otp-container" onSubmit={handelOtpSubmit}>
          <img src={loginLogo} alt="login-logo" className="otp-logo" />
          <h1 className="otp-heading">Create Your Accont</h1>
          <p className="otp-dis">
            Please verify your email ID to continue. We have sent an OTP to this{" "}
            {"{ emailID }"}
          </p>
          <input
            type="text"
            placeholder="Enter OTP"
            className="otp-inputs"
            value={otpInput}
            onChange={heandileOtp}
          />
          {/* <Link to="/success/account" className="link"> */}
          <button type="submit" className="otp-continue">
            Continue <span className="arrow">&#8594;</span>
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Otp;

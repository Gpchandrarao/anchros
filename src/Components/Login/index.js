import React, { useState } from "react";
import "./index.css";
import Nav from "../Nav";
import loginLogo from "../../Assets/Vector.svg";
import { useNavigate } from "react-router-dom";
// import Otp from "../Otp";

const Login = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  localStorage.setItem("userName", nameInput);
  const navigate = useNavigate();

  const heandelEmailIput = (e) => {
    setEmailInput(e.target.value);
  };
  const handelNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handelOnEmailSubmit = async (event) => {
    event.preventDefault();
    let otp = "";
    for (let i = 0; i < 4; i++) {
      otp += Math.floor(Math.random() * 10).toString();
    }
    localStorage.setItem("otp", otp);
    console.log(otp);

    // <Otp gOtp={otp} />;

    navigate("/otp");
    // try{
    //   const actionCode = {
    //     url:"http://localhost:3004/",
    //     handelOnEmailSubmit: true
    //   }
    //   try{
    //     await sendSignInLinkToEmail(auth, emailInput, actionCode)

    //   }catch(error){

    //     console.log("Error from actionCode", error)
    //   }

    // }catch(error){
    //   console.log("Error form Email Auth",error)
    // }
  };
  return (
    <div className="login-container">
      <Nav />
      <div className="login-cotents">
        <form className="login" onSubmit={handelOnEmailSubmit}>
          <img src={loginLogo} alt="login-logo" className="login-logo" />
          <h1 className="login-heading">Create Your Accont</h1>

          <input
            type="text"
            placeholder="Enter your Name"
            className="inputs"
            value={nameInput}
            onChange={handelNameInput}
            required
            name="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email ID "
            className="inputs"
            value={emailInput}
            onChange={heandelEmailIput}
            required
          />
          {/* <Link to="/otp" className="link"> */}
          <button type="submit" className="continue">
            Continue <span className="arrow">&#8594;</span>
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Login;

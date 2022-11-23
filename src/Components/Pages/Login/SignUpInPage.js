import React from "react";
import { Route, Routes } from "react-router-dom";
import "./SignUpInPage.css";
import Login from "./login";
import SignUp from "./signUp";
import UserInFormation from "./setting/userInformation";

function SignUpIn() {
  return (
    <>
      <div className="background">
        <div className="left-div">
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-div">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="setting" element={<UserInFormation />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default SignUpIn;

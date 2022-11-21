import React from "react";
import { Route, Routes } from "react-router-dom";
import "./signUpInPage.css";
import Login from "./login";
import SignUp from "./signUp";

function SignUpIn() {
  return (
    <>
      <div className="background">
        <div className="left-box">
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="spring-hole">
            <div className="line-box">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="right-box">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default SignUpIn;

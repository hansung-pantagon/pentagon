import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

function Login() {
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
          <div className="login-box">
            <div>로그인</div>
            <input type="text" placeholder="아이디"></input>
            <input type="text" placeholder="비밀번호"></input>
            <button>로그인</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

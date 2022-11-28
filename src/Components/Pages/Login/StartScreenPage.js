import React from "react";
import { Link } from "react-router-dom";
import "./StartScreenPage.css";

function StartScreenPage() {
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
          <div className="startscreen-div">
            <div className="title-name"></div>
            <div className="title-content">추억을 기록하세요</div>
            <Link to="/signUpInPage">
              <button className="go-bt">GO!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartScreenPage;

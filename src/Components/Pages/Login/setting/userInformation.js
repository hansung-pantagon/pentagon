import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./userInformation.css";

function UserInFormation() {
  return (
    <>
      <form className="setting-div">
        <div className="setting-title">설정</div>
        <div className="boy-div">
          <div className="boy">남자</div>
          <div className="boy-input-div">
            <input type="text" name="boyname" placeholder="이름" required minLength={1}></input>
            <input type="number" name="boybirthday" placeholder="생년월일" required minLength={1}></input>
          </div>
        </div>
        <div className="girl-div">
          <div className="girl">여자</div>
          <div className="girl-input-div">
            <input type="text" name="girlname" placeholder="이름" required minLength={1}></input>
            <input type="number" name="girlbirthday" placeholder="생년월일" required minLength={1}></input>
          </div>
        </div>
        <div className="last-input-div">
          <input type="text" name="meetAt" placeholder="사귄날짜" required minLength={1}></input>
          <input type="text" name="nickName" placeholder="닉네임" required minLength={1}></input>
        </div>
        <button type="submit" className="setting-bt">
          완료
        </button>
      </form>
    </>
  );
}

export default UserInFormation;

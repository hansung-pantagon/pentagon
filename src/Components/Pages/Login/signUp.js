import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [localInfo, setLocalInfo] = useState(() => {
    // localStorage에 저장하는 useState
    // 새로고침을 하고 setitem을 했을때, localstorage 값 유지
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("user");
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //회원가입 하려는 id가 localstorage에 존재하는지 검증하는 if문
    if (localInfo.find((user) => user?.id === e.target.id.value)) {
      alert("동일한 ID가 존재합니다 다시 입력해주세요");
      navigate("/signUpInPage/signup");
    } else {
      // id, pw 값을 setting 페이지에 넘겨준다.
      navigate("/signUpInPage/setting", {
        state: {
          id: e.target.id.value,
          pw: e.target.pw.value,
        },
      });
    }
  };

  return (
    <>
      <form className="signup-div" onSubmit={handleSubmit}>
        <div>회원가입</div>
        <input type="text" name="id" placeholder="아이디" required minLength={1}></input>
        <input type="password" name="pw" placeholder="비밀번호" required minLength={1}></input>
        <div className="signup-bt-div">
          <button className="signup-bt">회원가입</button>
        </div>
      </form>
    </>
  );
}

export default SignUp;

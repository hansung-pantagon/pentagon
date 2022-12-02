import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [localInfo, setLocalInfo] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("user");
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return [];
      }
    }
  });

  useEffect(() => {
    if (localInfo === []) {
      setLocalInfo([location.state]);
    } else if (location.state !== null) {
      setLocalInfo(localInfo.concat(location.state));
    }
  }, []);

  useEffect(() => {
    if (localInfo?.length === 0) {
      return;
    }
    localStorage.setItem("user", JSON.stringify(localInfo));
  }, [localInfo]);

  const checkIdPw = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const pw = e.target.pw.value;
    if (localInfo.find((user) => user?.id === id && user?.pw === pw)) {
      sessionStorage.setItem("loginId", JSON.stringify(id));
      sessionStorage.setItem("loginPw", JSON.stringify(pw));
      navigate("/home");
    } else {
      alert("로그인 실패");
      navigate("/signUpInPage");
    }
  };

  return (
    <>
      <form className="login-div" onSubmit={checkIdPw}>
        <div>로그인</div>
        <input type="text" name="id" placeholder="아이디" required minLength={1}></input>
        <input type="password" name="pw" placeholder="비밀번호" required minLength={1}></input>
        <div className="login-bt-div">
          <button type="submit" className="login-bt">
            로그인
          </button>
          <Link to="/signUpInPage/signup">
            <button className="signup-bt">회원가입</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;

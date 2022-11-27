import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
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

  useEffect(() => {
    // navigate으로 가져온 user 정보를 localstorage에 저장하는 useEffect
    // 왜 여기서 저장함? => navigate 쓰면 localstorage에 저장안되고 라우팅되서 젤 마지막 페이지인 login에 user정보 다 옮겨옴
    if (localInfo === []) {
      setLocalInfo([location.state]);
    } else if (location.state !== null) {
      // localstorage에 값이 있을때 새로운 user 값을 concat으로 연결
      setLocalInfo(localInfo.concat(location.state));
    }
  }, []);

  useEffect(() => {
    // localstorage의 값을 실시간으로 감지해서 저장시켜주기 위한 useEffect, 없으면 저장이 밀림
    if (localInfo?.length === 0) {
      return;
    }
    localStorage.setItem("user", JSON.stringify(localInfo));
  }, [localInfo]);

  const checkIdPw = (e) => {
    // 로그인 검증 함수
    e.preventDefault();
    const id = e.target.id.value;
    const pw = e.target.pw.value;
    if (localInfo.find((user) => user?.id === id && user?.pw === pw)) {
      sessionStorage.setItem("loginId", JSON.stringify(id));
      sessionStorage.setItem("loginPw", JSON.stringify(pw));
      navigate("/");
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

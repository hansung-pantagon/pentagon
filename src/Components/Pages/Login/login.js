import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setLoginInfo(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const checkIdPw = (e) => {
    const id = e.target.id.value;
    const pw = e.target.pw.value;
    if (loginInfo.find((user) => user.id === id && user.pw === pw)) {
      sessionStorage.setItem("loginId", JSON.stringify(id));
      sessionStorage.setItem("loginPw", JSON.stringify(pw));
      navigate("/");
    } else {
      alert("로그인 실패");
      navigate(-1);
    }
  };

  return (
    <>
      <form className="login-box" onSubmit={checkIdPw}>
        <div>로그인</div>
        <input type="text" name="id" placeholder="아이디" required minLength={1}></input>
        <input type="password" name="pw" placeholder="비밀번호" required minLength={1}></input>
        <div>
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

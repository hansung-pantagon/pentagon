import React from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // id, pw 값을 setting 페이지에 넘겨준다.
    navigate("/signUpInPage/setting", {
      state: {
        id: e.target.id.value,
        pw: e.target.pw.value,
      },
    });
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

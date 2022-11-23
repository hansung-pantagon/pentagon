import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [forms, setForms] = useState({
    // input 입력 저장 useState
    id: "",
    pw: "",
    nickName: "",
    boy: {
      birthday: "",
      name: "",
      imgUrl: "",
    },
    girl: {
      birthday: "",
      name: "",
      imgUrl: "",
    },
    meetAt: "",
    idImgUrl: "",
  });

  const [users, setUsers] = useState(() => {
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

  const handleChange = (e) => {
    // input 입력을 받아 form에 저장
    const { name, value } = e.target;
    setForms({
      ...forms,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 하려는 id가 localstorage에 존재하는지 검증하는 if문
    if (users.find((user) => user.id === forms.id)) {
      alert("동일한 ID가 존재합니다 다시 입력해주세요");
      navigate("/signUpInPage/signup");
    } else {
      handleSave(forms);
      const signUpId = e.target.id.value;
      alert(`${signUpId} 님 회원가입 완료.`);
      navigate(-1);
    }
    setForms({
      id: "",
      pw: "",
      nickName: "",
      boy: {
        birthday: "",
        name: "",
        imgUrl: "",
      },
      girl: {
        birthday: "",
        name: "",
        imgUrl: "",
      },
      meetAt: "",
      idImgUrl: "",
    });
  };

  const handleSave = (data) => {
    const user = {
      id: data.id,
      pw: data.pw,
      nickName: data.nickName,
      boy: {
        birthday: data.boy.birthday,
        name: data.boy.name,
        imgUrl: data.boy.imgUrl,
      },
      girl: {
        birthday: data.girl.birthday,
        name: data.girl.name,
        imgUrl: data.girl.imgUrl,
      },
      meetAt: data.meetAt,
      idImgUrl: data.idImgUrl,
    };
    // 처음 localstorage에 아무것도 없을때
    if (users === []) {
      setUsers([user]);
    } else {
      // localstorage에 값이 있을때 새로운 user 값을 concat으로 연결
      setUsers(users.concat(user));
    }
  };

  useEffect(() => {
    if (users?.length === 0) {
      return;
    }
    localStorage.setItem("user", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <form className="signup-box" onSubmit={handleSubmit}>
        <div>회원가입</div>
        <input type="text" name="id" value={forms.id} onChange={handleChange} placeholder="아이디" required minLength={1}></input>
        <input type="password" name="pw" value={forms.pw} onChange={handleChange} placeholder="비밀번호" required minLength={1}></input>
        <div>
          <button type="submit" className="signup-bt">
            회원가입
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;

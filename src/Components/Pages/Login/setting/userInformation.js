import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./userInformation.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

function UserInFormation() {
  const location = useLocation();
  const navigate = useNavigate();
  const signUpId = location.state.id;
  const signUpPw = location.state.pw;
  const [boyBirthday, setBoyBirthday] = useState("");
  const [girlBirthday, setGirlBirthday] = useState("");
  const [whenMeetAt, setWhenMeetAt] = useState("");
  const [localInfo, setLocalInfo] = useState([]);

  const [forms, setForms] = useState({
    // input 입력 저장 useState
    id: "",
    pw: "",
    nickName: "",
    boyName: "",
    boyBirthday: "",
    boyImgUrl: "",
    girlName: "",
    girlBirthday: "",
    girlImgUrl: "",
    meetAt: "",
    idImgUrl: "",
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
    setLocalInfo(() => {
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
    //회원가입 하려는 id가 localstorage에 존재하는지 검증하는 if문
    if (localInfo.find((user) => user?.id === signUpId)) {
      alert("동일한 ID가 존재합니다 다시 입력해주세요");
      navigate("/signUpInPage/signup");
    } else {
      // 없다면 입력한 정보를 login 페이지로 옮겨준다
      // 왜 여기서 저장안하고 navigate 안씀? => 저장하는 코드를 쓰고 navigate를 쓰면 localstorage에 저장이 안되고 navigate됨
      alert(`${signUpId} 님 회원가입 완료.`);
      navigate("/signUpInPage/", {
        state: {
          id: signUpId,
          pw: signUpPw,
          nickName: e.target.nickName.value,
          boyBirthday: boyBirthday,
          boyName: e.target.boyName.value,
          boyImgUrl: "", // 이미지는 아직 구현 못함 ㅠㅠ 알던 반칸 전송
          girlBirthday: girlBirthday,
          girlName: e.target.girlName.value,
          girlImgUrl: "",
          meetAt: whenMeetAt,
          idImgUrl: "",
        },
      });
    }
    setForms({
      id: "",
      pw: "",
      nickName: "",
      boyName: "",
      boyBirthday: "",
      boyImgUrl: "",
      girlName: "",
      girlBirthday: "",
      girlImgUrl: "",
      meetAt: "",
      idImgUrl: "",
    });
  };

  return (
    <>
      <form className="setting-div" onSubmit={handleSubmit}>
        <div className="setting-title">설정</div>
        <div className="boy-div">
          <div className="boy">남자</div>
          <div className="boy-input-div">
            <input type="text" name="boyName" value={forms.boyName} onChange={handleChange} placeholder="이름" required minLength={1}></input>
            <DatePicker selected={boyBirthday} name="boybirthday" placeholderText="생년월일" onChange={(date) => setBoyBirthday(date)} locale={ko} dateFormat="yyyy.MM.dd" />
          </div>
        </div>
        <div className="girl-div">
          <div className="girl">여자</div>
          <div className="girl-input-div">
            <input type="text" name="girlName" value={forms.girlName} onChange={handleChange} placeholder="이름" required minLength={1}></input>
            <DatePicker selected={girlBirthday} name="girlbirthday" placeholderText="생년월일" onChange={(date) => setGirlBirthday(date)} locale={ko} dateFormat="yyyy.MM.dd" />
          </div>
        </div>
        <div className="last-input-div">
          <DatePicker selected={whenMeetAt} name="meetAt" placeholderText="사귄날짜" onChange={(date) => setWhenMeetAt(date)} locale={ko} dateFormat="yyyy.MM.dd" />
          <input type="text" name="nickName" value={forms.nickName} onChange={handleChange} placeholder="닉네임" required minLength={1}></input>
        </div>
        <button type="submit" className="setting-bt">
          완료
        </button>
      </form>
    </>
  );
}

export default UserInFormation;

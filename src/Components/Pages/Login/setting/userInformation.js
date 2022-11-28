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

    alert(`${signUpId} 님 회원가입 완료.`);
    navigate("/signUpInPage/", {
      state: {
        id: signUpId,
        pw: signUpPw,
        nickName: e.target.nickName.value,
        boyBirthday: boyBirthday,
        boyName: e.target.boyName.value,
        boyImgUrl: URL.createObjectURL(document.getElementById("boyImgUrl").files[0]),
        girlBirthday: girlBirthday,
        girlName: e.target.girlName.value,
        girlImgUrl: URL.createObjectURL(document.getElementById("girlImgUrl").files[0]),
        meetAt: whenMeetAt,
        idImgUrl: URL.createObjectURL(document.getElementById("idImgUrl").files[0]),
      },
    });
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
            <input type="file" id="boyImgUrl" className="boyImgUrl" name="boyImgUrl" accept=".jpg, jpeg, .png" onChange={handleChange} />
          </div>
        </div>
        <div className="girl-div">
          <div className="girl">여자</div>
          <div className="girl-input-div">
            <input type="text" name="girlName" value={forms.girlName} onChange={handleChange} placeholder="이름" required minLength={1}></input>
            <DatePicker selected={girlBirthday} name="girlbirthday" placeholderText="생년월일" onChange={(date) => setGirlBirthday(date)} locale={ko} dateFormat="yyyy.MM.dd" />
            <input type="file" id="girlImgUrl" className="girlImgUrl" name="girlImgUrl" accept=".jpg, jpeg, .png" onChange={handleChange} />
          </div>
        </div>
        <div className="last-input-div">
          <DatePicker selected={whenMeetAt} name="meetAt" placeholderText="사귄날짜" onChange={(date) => setWhenMeetAt(date)} locale={ko} dateFormat="yyyy.MM.dd" />
          <input type="file" id="idImgUrl" className="idImgUrl" name="idImgUrl" accept=".jpg, jpeg, .png" onChange={handleChange} />
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

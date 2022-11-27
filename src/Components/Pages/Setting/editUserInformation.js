import React, { useState } from 'react';
import './editUserInformation.css';
import SetSetting from './setting';
import SetTheme from './setTheme';

function EditUserInformation (props) {

    const users = [];

    const dummyData = {
        boy: {
            birthday: 19990402,
            name: "name",
            imgUrl: "imgUrl"
        },
        girl: {
            birthday: 19990402,
            name: "name",
            imgUrl: "imgUrl"
        },
        id: "aaa@aaa.com",
        idImgUrl: "",
        meetAt: "20221111",
        nickname: "nickname",
        pw: "aaa"
    }

    users.push(dummyData);

    window.localStorage.setItem("user", JSON.stringify(users));

    const [content, setContent] = useState(false);
    // SetSetting 컴포넌트에 넘겨줄 데이터 정의

    const [leftColor, setleftColor] =useState("#47ACC2");
    const [rightColor, setrightColor] =useState("#47ACC2");
    const [postitColor, setPostitColor] =useState("#298FA6");

    // 로컬의 전체 유저 데이터 가져오는 함수
    const getLocalUsers = JSON.parse(window.localStorage.getItem("user"));
    // 현재 로그인한 id(더미 데이터) / 세션 스토리지에서 가져오는 것
    const nowLogIn = "aaa@aaa.com";

    // 현재 로그인한 id 정보 가져오기, 구조분해할당으로 배열을 객체로 만듦
    const [userInfo] = getLocalUsers.filter(data => data.id === nowLogIn);

    console.log([userInfo]);
    console.log(getLocalUsers);



    const getColorValue = (leftColor, rightColor, postitColor) => { //여기서 전달 받았음
        setleftColor(leftColor);
        setrightColor(rightColor);
        setPostitColor(postitColor);
        // console.log("editUserInformation에서 ",leftColor);
        // console.log("editUserInformation에서 ",rightColor);
        props.giveColorValue(leftColor,rightColor, postitColor);
    }

    return (
        <>
            <div>
                <div className="left-box">
                    <button onClick={() => setContent(true)}>
                        설정
                    </button>
                    <button onClick={() => setContent(false)}>
                        테마
                    </button>
                    <button onClick={()=>setContent(false)}>
                        공유하기
                    </button>
                    <button onClick={()=>setContent(false)}>
                        로그아웃
                    </button>
                </div>
                <div className="right-box">
                    {content ? <SetSetting userInfo={userInfo} /> : <SetTheme getColorValue={getColorValue}/>}
                </div>
            </div>
        </>
    );
};

export default EditUserInformation;
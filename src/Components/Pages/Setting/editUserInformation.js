import React, { useState } from 'react';
import './editUserInformation.css';
import SetSetting from './setting';
import SetTheme from './setTheme';
import { useNavigate } from 'react-router-dom';

function EditUserInformation (props) {
    const navigate = useNavigate();

    const [content, setContent] = useState(true);

    const [leftColor, setleftColor] =useState("#47ACC2");
    const [rightColor, setrightColor] =useState("#47ACC2");
    const [postitColor, setPostitColor] =useState("#298FA6");

    const getLocalUsers = JSON.parse(window.localStorage.getItem("user"));
    const nowLogIn = JSON.parse(window.sessionStorage.getItem("loginId"));
    const userInfo = getLocalUsers.filter(data => data.id === nowLogIn);

    console.log(userInfo);
    const [ destUserInfo ] = userInfo;
    console.log(destUserInfo);

    const getColorValue = (leftColor, rightColor, postitColor) => { //여기서 전달 받았음
        setleftColor(leftColor);
        setrightColor(rightColor);
        setPostitColor(postitColor);
        props.giveColorValue(leftColor,rightColor, postitColor);
    }
    const logout = () => {
        if (window.confirm('정말 로그아웃 하시겠습니까?')) {
            alert('로그아웃 되었습니다.');
            navigate("/SignUpInPage");
            window.sessionStorage.removeItem("loginId");
            window.sessionStorage.removeItem("loginPw");
        }
        else{
        }
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
                    <button onClick={()=>logout()}>
                        로그아웃
                    </button>
                </div>
                <div className="right-box">
                    {content ? <SetSetting userInfo={destUserInfo} /> : <SetTheme getColorValue={getColorValue}/>}
                </div>
            </div>
        </>
    );
};

export default EditUserInformation;
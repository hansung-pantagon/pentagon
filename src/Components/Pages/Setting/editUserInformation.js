import React, { useState } from 'react';
import './editUserInformation.css';
import SetSetting from './setting';
import SetTheme from './setTheme';

function EditUserInformation (props) {
    const [content, setContent] = useState(false);

    const [bgColor, setBgColor] =useState("#298FA6");
    const [themeColor, setThemeColor] =useState("#47ACC2");

    const getColorValue = (bgColor,themeColor)=>{ //여기서 전달 받았음
        setBgColor(bgColor);
        setThemeColor(themeColor);
        console.log("editUserInformation에서 ",bgColor);
        console.log("editUserInformation에서 ",themeColor);
        props.giveColorValue(bgColor,themeColor);
    }

    return (
        <>
            <div>
                <div className="left-box">
                    <button onClick={() => setContent(true)}>설정</button>
                    <button onClick={()=>setContent(false)}>테마</button>
                    <button onClick={()=>setContent(false)}>공유하기</button>
                    <button onClick={()=>setContent(false)}>로그아웃</button>
                </div>
                <div className="right-box">
                    {content ? <SetSetting/> : <SetTheme getColorValue={getColorValue}/>}
                </div>
            </div>
        </>
    );
};

export default EditUserInformation;
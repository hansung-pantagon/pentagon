import React from 'react';
import './editUserInformation.css';
import { useEffect, useState } from "react";

const SetTheme = (props) => {
    const [bgColor, setBgColor] =useState("");
    const [themeColor, setThemeColor] =useState("");
    const submit = (e) =>{
        e.preventDefault();
        props.getColorValue(bgColor,themeColor);
        
    }
    
    const bgColorChangeHandler = (e) => {
        setBgColor(e.currentTarget.style.background);
        console.log("클릭",e.currentTarget.style.background);
    }

    const themeChangeHandler = (e) => {
        setThemeColor(e.currentTarget.style.background);
        console.log("클릭",e.currentTarget.style.background);
    }

    const bgColorList = [
        {id:1, color:"rgba(251, 130, 130, 0.2)"}, //pink
        {id:2, color:"#C8E1FF"}, //skyblue
        {id:3, color:"#BCF2C4"}, //lighgreen
        {id:4, color:"#F5F5F5"}, //lighgray
        {id:5, color:"#F6D2FF"}, //purple
        {id:6, color:"#298FA6"} //원래
    ]

    const themeColorList = [
        {id:1, color:"rgba(251, 130, 130, 0.2)"}, //pink
        {id:2, color:"#C8E1FF"}, //skyblue
        {id:3, color:"#BCF2C4"}, //lighgreen
        {id:4, color:"#EDF7C5"}, //yellow
        {id:5, color:"#F6D2FF"}, //purple
        {id:6, color:"#47ACC2"} //원래
    ]


    return (
        <>
        <form onSubmit={submit}>
            <div>테마</div>
                <div className="theme">
                    <div>포스터</div>
                    <div className ="theme-box">
                        {bgColorList.map(color => <div key={color.id} style= {{background:color.color}} onClick={bgColorChangeHandler}></div>)}
                        
                    </div>
                </div>
                <div className="theme">
                    <div>사진첩</div>
                    <div className ="theme-box">
                        {themeColorList.map(color => <div key={color.id} style= {{background:color.color}} onClick={themeChangeHandler}></div>)}
                    </div>
                </div>
            <button>설정</button>
        </form>
        </>
    )
}

export default SetTheme;
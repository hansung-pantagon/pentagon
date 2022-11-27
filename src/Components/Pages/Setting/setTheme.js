import React from 'react';
import './editUserInformation.css';
import { useEffect, useState } from "react";

const SetTheme = (props) => {
    const [leftColor, setLeftColor] =useState("");
    const [rightColor, setRightColor] =useState("");
    const [postitColor, setPostitColor] =useState("");
    const submit = (e) =>{
        e.preventDefault();
        props.getColorValue(leftColor,rightColor,postitColor);
        
    }
    
    const leftChangeHandler = (e) => {
        setLeftColor(e.currentTarget.style.background);
        console.log("클릭",e.currentTarget.style.background);
    }

    const rightChangeHandler = (e) => {
        setRightColor(e.currentTarget.style.background);
        console.log("클릭",e.currentTarget.style.background);
    }

    const postItChangeHandler = (e) => {
        setPostitColor(e.currentTarget.style.background);
        console.log("클릭",e.currentTarget.style.background);
    }

    const postItColorList = [ 
        {id:1, color:"#E2B0B0"}, //pink
        {id:2, color:"#C8E1FF"}, //skyblue
        {id:3, color:"#BCF2C4"}, //lighgreen
        {id:4, color:"#F5F5F5"}, //lighgray
        {id:5, color:"#F6D2FF"}, //purple
        {id:6, color:"#298FA6"} //원래
    ]

    const themeColorList = [
        {id:1, color:"#E9D1D1"}, //pink
        {id:2, color:"#C8E1FF"}, //skyblue
        {id:3, color:"#BCF2C4"}, //lighgreen
        {id:4, color:"#EDF7C5"}, //yellow
        {id:5, color:"#F6D2FF"}, //purple
        {id:6, color:"#47ACC2"} //원래
    ]


    return (
        <>
        <form onSubmit={submit}>
                <div className="theme">
                    <div>사진첩 왼쪽</div>
                    <div className ="theme-box">
                        {themeColorList.map(color => <div key={color.id} style= {{background:color.color}} onClick={leftChangeHandler}></div>)}
                        
                    </div>
                </div>
                <div className="theme">
                    <div>사진첩 오른쪽</div>
                    <div className ="theme-box">
                        {themeColorList.map(color => <div key={color.id} style= {{background:color.color}} onClick={rightChangeHandler}></div>)}
                        
                    </div>
                </div>
                <div className="theme">
                    <div>포스트잇</div>
                    <div className ="theme-box">
                        {postItColorList.map(color => <div key={color.id} style= {{background:color.color}} onClick={postItChangeHandler}></div>)}
                    </div>
                </div>
            <button>설정</button>
        </form>
        </>
    )
}

export default SetTheme;
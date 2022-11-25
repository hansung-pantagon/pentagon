import React from 'react';
import './setTheme.css';
import Color from './Color';
import { useState } from "react";

const SetTheme = () => {
    const [color, setColor] = useState();
    return (
        <>
            <div>테마</div>
                <div className="setting">
                    <div>바탕</div>
                    <div className ="theme-box">
                        <div className = "pink" onclick={()=>setColor()} ></div>
                        <div className = "skyblue"></div>
                        <div className = "lightgreen"></div>
                        <div className = "lightgrey"></div>
                        <div className = "purple"></div>
                        <div className = "grey"></div>
                    </div>
                </div>
                <div className="setting">
                    <div>사진첩</div>
                    <div className ="theme-box">
                        <div className = "pink"></div>
                        <div className = "skyblue"></div>
                        <div className = "lightgreen"></div>
                        <div className = "yellow"></div>
                        <div className = "purple"></div>
                        <div className = "blue"></div>
                    </div>
                </div>
            <button>설정</button>
        </>
    )
}

export default SetTheme;
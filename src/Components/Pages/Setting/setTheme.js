import React from 'react';
import './editUserInformation.css';

const SetTheme = () => {
    return (
        <>
            <div>테마</div>
                <div className="theme">
                    <div>바탕</div>
                    <div className ="theme-box">
                        <div className = "pink"></div>
                        <div className = "skyblue"></div>
                        <div className = "lightgreen"></div>
                        <div className = "lightgrey"></div>
                        <div className = "purple"></div>
                        <div className = "grey"></div>
                    </div>
                </div>
                <div className="theme">
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
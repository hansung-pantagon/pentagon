import React from 'react';
import './editUserInformation.css';

const SetSetting = () => {
    return (
        <>
            <div>설정</div>
            <div className="setting">
                <div>남자</div>
                <div className ="setting-box">
                    <div>이름
                        <input type="text" placeholder=" "></input>
                    </div>
                    <div>생년월일
                        <input type="text" placeholder=" "></input>
                    </div>
                </div>
                <div>여자</div>
                <div className ="setting-box">
                    <div>이름
                        <input type="text" placeholder=" "></input>
                    </div>
                    <div>생년월일
                        <input type="text" placeholder=" "></input>
                    </div>
                </div>
                <div className = "info">
                    <div>사귄 날짜
                        <input type="text" placeholder=" "></input>
                    </div>
                    <div>닉네임
                        <input type="text" placeholder=" "></input>
                    </div>
                </div>
            </div>
            <button>설정</button>
        </>
    );
}

export default SetSetting;
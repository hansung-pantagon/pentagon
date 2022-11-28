import React, { useState } from 'react';
import './editUserInformation.css';

const SetSetting = ( {userInfo} ) => {

    const [edited, setEdited] = useState(userInfo);

    const nowId = JSON.parse(window.sessionStorage.getItem("loginId"));
    const getData = window.localStorage.getItem("user");

    const handleSave = data => {
        const { id, pw, nickName, boyName, boyBirthday, boyImgUrl, girlName, girlBirthday, girlImgUrl, idImgUrl, meetAt } = data;
        
        const editArray = JSON.parse(getData).map(row => 
            data.id === nowId ? {
                id,
                pw,
                nickName,
                boyName,
                boyBirthday,
                boyImgUrl,
                girlName,
                girlBirthday,
                girlImgUrl,
                idImgUrl,
                meetAt
            } : row)
        window.localStorage.setItem("user", JSON.stringify(editArray));
    }

    const onChange = (e) => {
        const {name, value } = e.target;

        setEdited({
            ...edited,
            [name]: value
        })
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleSave(edited);
    }

    return (
        <>
            <div>설정</div>
                <form onSubmit={onSubmitEdit}>
                    <div className="setting">
                        <div>남자</div>
                        <div className ="setting-box">
                            <div className>
                                이름
                                <div>{userInfo.boyName}</div>
                            </div>
                            <div>생년월일
                                <div>{userInfo.boyBirthday.substr(0, 10)}</div>
                            </div>
                            <div>
                                <img
                                    id="boyImg"
                                    src={userInfo.boyImgUrl}
                                    alt="이미지가 없습니다." style= {{display : 'none'}}>
                                </img>
                            </div>
                        </div>
                        <div>여자</div>
                        <div className ="setting-box">
                            <div>
                                이름
                                <div>{userInfo.girlName}</div>
                            </div>
                            <div>생년월일
                                <div>{userInfo.girlBirthday.substr(0, 10)}</div>
                            </div>
                            <div>
                                <img
                                    id="girlImg"
                                    src={userInfo.girlImgUrl}
                                    alt="이미지가 없습니다." style= {{display : 'none'}}>
                                </img>
                            </div>
                        </div>
                    <div className = "info">
                        <div>사귄 날짜
                            <div className="date">{userInfo.meetAt.substr(0, 10)}</div>
                        </div>
                        <div>닉네임
                            <input
                                className="nickname"
                                type="text"
                                name="nickName"
                                value={edited.nickName}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
            <button id ="settingbtn" type="submit">설정</button>
            </form>
        </>
    );
}

export default SetSetting;
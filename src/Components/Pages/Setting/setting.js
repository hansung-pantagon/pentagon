import React, { useState } from 'react';
import './editUserInformation.css';

const SetSetting = ( {userInfo} ) => {

    // nickname의 값이 바뀔때마다 화면에 리렌더링하면서 보여주기 위해 useState 사용
    const [edited, setEdited] = useState(userInfo);

    const nowId = JSON.parse(window.sessionStorage.getItem("loginId"));

    // 로컬 스토리지에서 user 데이터 전부를 가져옴 (현재는 문자열의 형태)
    const getData = window.localStorage.getItem("user");
    console.log(userInfo);

    // 바뀐 데이터를 로컬 스토리지에 저장하는 함수
    const handleSave = data => {
        const { id, pw, nickName, boyName, boyBirthday, boyImgUrl, girlName, girlBirthday, girlImgUrl, idImgUrl, meetAt } = data;
        
        const editArray = JSON.parse(getData).map(row => data.id === nowId ? {
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
        console.log(editArray);
        window.localStorage.setItem("user", JSON.stringify(editArray));
    }

    const onChange = (e) => {
        const {name, value } = e.target;
        console.log(name);
        console.log(value);
        console.log(edited);

        setEdited({
            ...edited,
            [name]: value
        })
        console.log(edited);
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        console.log(e.target);
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
                                name="nickname"
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
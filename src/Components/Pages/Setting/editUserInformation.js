import React, { useState } from 'react';
import './editUserInformation.css';
import SetSetting from './setting';
import SetTheme from './setTheme';

function EditUserInformation () {
    const [content, setContent] = useState(false);

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
                    {content ? <SetSetting/> : <SetTheme/>}
                </div>
            </div>
        </>
    );
};

export default EditUserInformation;
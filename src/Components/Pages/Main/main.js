import React from 'react';
import { useEffect, useState } from "react";
import './main.css'

const Main = () => {
    const [loginInfo, setLoginInfo] = useState([]);
    const [nowLoginInfo, setNowLoginInfo] = useState([]);
    
    const nowId = JSON.parse(sessionStorage.getItem("loginId"));
    console.log("세션에서 가져온 로그인한 id ", nowId);

    useEffect(() => {
        setLoginInfo(JSON.parse(localStorage.getItem('user')));
        console.log("로컬에서 가져온 모든 정보 ", loginInfo);
        // const nowUserInfo = loginInfo.find((user)=>user.id === nowId);
        // console.log("nowUserInfo : ", nowUserInfo);
        
        // if(loginInfo.find((user)=>user.id === nowId)){ //찾으면? 있으면?
            
        //     setNowLoginInfo(JSON.parse(localStorage.getItem("user")));
        // }
    }, []);

    //console.log("로컬에서 찾은 id의 정보들", nowLoginInfo);




    return (
        <div className="CommonImg-container">
            <div className="CommonImg">//img가져오기</div>
            <div className="comment">
                만난지<br/> 
                365일<br/> 
                된 날
            </div>
            
        </div>
    );
};

export default Main;

import React from 'react';
import { useEffect, useState } from "react";
import {isLogin, isOwner} from "../../../util/util";
import './main.css'

const Main = () => {
    const [loginInfo, setLoginInfo] = useState([]);
    const [nowLoginInfo, setNowLoginInfo] = useState([]);
    
    const nowId = JSON.parse(sessionStorage.getItem("loginId"));
    console.log("세션에서 가져온 로그인한 id ", nowId);

    
    
      
    useEffect(() => {
        console.log("1 로컬에서 가져온 모든 정보 ", loginInfo);
        setLoginInfo(JSON.parse(localStorage.getItem("user")).find((user)=> user?.id === nowId));
        
        
    }, []);

    //console.log("로컬에서 찾은 id의 정보들", nowLoginInfo);

    console.log("2 로컬에서 가져온 모든 정보 ", loginInfo);


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

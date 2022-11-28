import React from 'react';
import { useEffect, useState } from "react";
import {isLogin, isOwner} from "../../../util/util";
import './main.css'

const Main = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const nowID = JSON.parse(window.sessionStorage.getItem("loginId"));
    const loggedInData = localData.filter(user => user.id === nowID);
    
    const userMeetAt = loggedInData[0].meetAt;
    const idMeetAt = userMeetAt.substr(0, 10);

    const idImg = loggedInData[0].idImgUrl;
    console.log(idImg);

    var now = new Date();
    var start = new Date(idMeetAt);
    var timeDiff = now.getTime() - start.getTime();
    var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);

    return (
        <div className="CommonImg-container">
            <img src={idImg} className="CommonImg"></img>
            <div className="comment">
                만난지<br/> 
                {day}일<br/> 
                된 날
            </div>
            
        </div>
    );
};

export default Main;

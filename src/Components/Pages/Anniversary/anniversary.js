import React from "react";
import { useEffect, useState } from "react";
import "./anniversary.css";
// import {isLogin, compareId } from "../../../util/util"


// const localData = compareId();
// const meetAt = localData.meetAt;
// console.log("meetAt",meetAt);

// const aLoggedIn = () => {
//     const nowId = JSON.parse(sessionStorage.getItem("loginId"));

//     if (!nowId) {
//         return; // 로그인 화면으로 되돌아가도록
//     }

//     const localData = JSON.parse(localStorage.getItem("user"));
//         const nowLoggedIn = localData.filter(item => item.id == nowId);

//         console.log(nowLoggedIn);
//         const meetAt = nowLoggedIn.
// }

const anniversary = () => {
    const signup = 
    [
        // 계정1
        {
            "id": "String",
            "pw": "String",
            "nickname": "String",
            "boy": { 
                "birthday": "YYYY-MM-dd", 
                "name": "String",
                "imgUrl": "String"
            },
            "girl": {
                "birthday": "YYYY-MM-dd", 
                "name": "String",
                "imgUrl": "String"
            },
            "meetAt": "YYYY-MM-dd", //사귄 날
            "idImgUrl": "String"  //메인 화면에 들어가는 공통사진
        },
        // 계정2
        {
            "id": "Number",
            "pw": "String",
            "nickName": "String",
            "boy": { 
                "birthday": "YYYY-MM-dd", 
                "name": "String" 
            },
            "girl": {
                "birthday": "YYYY-MM-dd", 
                "name": "String"
            },
            "meetAt": "YYYY-MM-dd",
            "idImgUrl": "String"  //메인 화면에 들어가는 공통사진
        },
    ]
    
    // const [loginInfo, setLoginInfo] = useState([]);
    // const [nowLoginInfo, setNowLoginInfo] = useState([]);
    
    // const nowId = JSON.parse(sessionStorage.getItem("loginId"));
    // console.log("세션에서 가져온 로그인한 id ", nowId);

    // useEffect(() => {
    //     const localData = JSON.parse(localStorage.getItem("user"));
    //     const nowLoggedIn = localData.filter(item => item.id == nowId);

    //     console.log(nowLoggedIn);
    //     const meetAt = nowLoggedIn.meetAt;
    //     console.log(meetAt);

    //     setLoginInfo(JSON.parse(localStorage.getItem("user")));
    //     console.log("로컬에서 가져온 모든 정보 ", loginInfo);
    //     const nowUserInfo = loginInfo.find((user)=>user.id === nowId);
    //     console.log("nowUserInfo : ", nowUserInfo);
        
    //     if(loginInfo.find((user)=>user.id === nowId)){ //찾으면? 있으면?
            
    //         setNowLoginInfo(JSON.parse(localStorage.getItem("user")));
    //     }
    // }, []);

    // console.log("로컬에서 찾은 id의 정보들", nowLoginInfo);
    

    //1. Date 객체 생성
    var now = new Date();
    //2. 연도를 가져오는 메서드 .getFullYear()
    console.log(now.getFullYear());
    //3. 월 정보를 가져오는 메서드 .getMonth() {0: 1월, 1: 2월, ... 10: 11월, 11: 12월}
    console.log(now.getMonth());
    //4. 일 정보를 가져오는 메서드 .getDate()
    console.log(now.getDate());
    //5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드 .getTime()
    console.log(now.getTime());
    //6. 특정 일의 Date 객체 생성
    var christmas = new Date('2020-12-25');
    console.log(christmas);
    //7. 특정 ms의 Date 객체 생성
    var ms = new Date(1000);
    console.log(ms);

    var now = new Date();
    var start = new Date('2022-05-16');
    var firstday = start.toDateString();

    var timeDiff = now.getTime() - start.getTime();
        var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
        if(day<300){
            var sday1 = start.getTime() + 299 * (1000 * 60 * 60 * 24);
                var fivehurdred = new Date(sday1);
                var fivehurdredDate = fivehurdred.getFullYear() + '.' + (fivehurdred.getMonth()+1) + '.' + fivehurdred.getDate(); //300일인 날짜
                var timeDiff3 = fivehurdred.getTime() - now.getTime();
                var leaveday1 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
            var sday2 = start.getTime() + 399 * (1000 * 60 * 60 * 24);
                var sixhurdred = new Date(sday2);
                var sixhurdredDate = sixhurdred.getFullYear() + '.' + (sixhurdred.getMonth()+1) + '.' + sixhurdred.getDate(); //400일인 날짜
                var timeDiff4 = sixhurdred.getTime() - now.getTime();
                var leaveday2 = Math.floor(timeDiff4 / (1000 * 60 * 60 * 24) + 1);
            var sday3 = start.getTime() + 499 * (1000 * 60 * 60 * 24);
                var sevenhurdred = new Date(sday3);
                var sevenhurdredDate = sevenhurdred.getFullYear() + '.' + (sevenhurdred.getMonth()+1) + '.' + sevenhurdred.getDate(); //500일인 날짜
                var timeDiff5 = sevenhurdred.getTime() - now.getTime();
                var leaveday3 = Math.floor(timeDiff5 / (1000 * 60 * 60 * 24) + 1);
            var sday4 = start.getTime() + 999 * (1000 * 60 * 60 * 24);
                var thousand = new Date(sday4);
                var thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
                var timeDiff6 = thousand.getTime() - now.getTime();
                var leaveday4 = Math.floor(timeDiff6 / (1000 * 60 * 60 * 24) + 1);
        }
        else{
            var sday1 = start.getTime() + 499 * (1000 * 60 * 60 * 24);
                var fivehurdred = new Date(sday1);
                var fivehurdredDate = fivehurdred.getFullYear() + '.' + (fivehurdred.getMonth()+1) + '.' + fivehurdred.getDate(); //500일인 날짜
                var timeDiff3 = fivehurdred.getTime() - now.getTime();
                var leaveday1 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
            var sday2 = start.getTime() + 599 * (1000 * 60 * 60 * 24);
                var sixhurdred = new Date(sday2);
                var sixhurdredDate = sixhurdred.getFullYear() + '.' + (sixhurdred.getMonth()+1) + '.' + sixhurdred.getDate(); //600일인 날짜
                var timeDiff4 = sixhurdred.getTime() - now.getTime();
                var leaveday2 = Math.floor(timeDiff4 / (1000 * 60 * 60 * 24) + 1);
            var sday3 = start.getTime() + 699 * (1000 * 60 * 60 * 24);
                var sevenhurdred = new Date(sday3);
                var sevenhurdredDate = sevenhurdred.getFullYear() + '.' + (sevenhurdred.getMonth()+1) + '.' + sevenhurdred.getDate(); //700일인 날짜
                var timeDiff5 = sevenhurdred.getTime() - now.getTime();
                var leaveday3 = Math.floor(timeDiff5 / (1000 * 60 * 60 * 24) + 1);
                var sday4 = start.getTime() + 999 * (1000 * 60 * 60 * 24);
            var thousand = new Date(sday4);
                var thousandDate = thousand.getFullYear() + '.' + (thousand.getMonth()+1) + '.' + thousand.getDate();
                var timeDiff6 = thousand.getTime() - now.getTime();
                var leaveday4 = Math.floor(timeDiff6 / (1000 * 60 * 60 * 24) + 1);
        }


        

    return (
        <>
         {/* <div className="background-anniversary"></div> */}
        <div className="whitebox">
            
         <div className="heart"></div>
            {/* <div className="img-circle"><img src="{signup.boy.imgUrl}"/>
            <img src="{heart}"/></div> */}
         <div className="firstday">
           <h3> 우리 함께한 지
            {day} days since {firstday} </h3>
         </div>
         <div className="leftday1">{day < 300 ? <h3>300days</h3> : <h3>500days</h3>}</div>
         <div className="rightday1"><h3>{leaveday1}days left {fivehurdredDate}</h3></div>
         <div className="line1"></div>
         <div className="line2"></div>
         <div className="leftday2">{day < 300 ? <h3>400days</h3> : <h3>600days</h3>}</div>
         <div className="rightday2"><h3>{leaveday2}days left {sixhurdredDate}</h3></div>
         <div className="line3"></div>
         <div className="leftday3">{day < 300 ? <h3>500days</h3> : <h3>600days</h3>}</div>
         <div className="rightday3"><h3>{leaveday3}days left {sevenhurdredDate}</h3></div>
         <div className="line4"></div>
         <div className="leftday4"><h3>1000days</h3></div>
         <div className="rightday4"><h3>{leaveday4}days left {thousandDate}</h3></div>
         <div className="line5"></div>
         </div>
         
            
        </>
    );
};

export default anniversary;
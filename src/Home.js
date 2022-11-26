import React, { useEffect, useState } from 'react';
import './Home.css';
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom";


const Home = (props) => {
    console.log("home.js에서 props.bgValue : ", props.bgValue) //전달 성공 ㅎㅎ
    console.log("home.js에서 props.themeValue : ", props.themeValue)
    const [letterColor, setLetterColor ]= useState("white");
    useEffect(()=>{
        if(props.bgValue!=="#298FA6")
        setLetterColor("black");

    },[props])
        
    
    return (
        <>
        <div className="bookcover">

            <div className="bookcover-container">
            <div className="bookcover-left" style={{background: props.themeValue, border: props.themeValue}}>
                <div className="bookcover-left-dot">
                    <div className="bookcover-left-white">
                        <div className="bookcover-left-content">
                            
                            <div className="userImg-container">
                                <div className="userImg">
                                    <div className="boyImg">남자 이미지 가져오기</div>
                                    <div className="connect-container">
                                        <div className="connect"></div>
                                        <div className="connect"></div>
                                        <div className="connect"></div>
                                    </div>
                                    <div className="girlImg">여자 이미지 가져오기</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bookcover-right" style={{background: props.themeValue, border: props.themeValue}}>
                <div className="bookcover-right-dot">
                    <div className="bookcover-right-white">
                        <div className="couple-name">OOOO의 홈피</div>
                        <div className="bookcover-right-content">              
                            <Outlet />
                        </div>
                    </div>

                    <div className="menu">
                        <div className="menu-container">
                            <Link style={{background: props.bgValue, color: letterColor}} to="/home">메인</Link>
                            <Link style={{background: props.bgValue, color: letterColor}} to="/home/photo">사진</Link>
                            <Link style={{background: props.bgValue, color: letterColor}} to="/home/friend">친구</Link>
                            <Link style={{background: props.bgValue, color: letterColor}} to="/home/anniversary">기념일</Link>
                            <Link style={{background: props.bgValue, color: letterColor}} to="/home/setting">설정</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </> 
    );
};

export default Home;
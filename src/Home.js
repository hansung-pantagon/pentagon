import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="bookcover">

            <div className="bookcover-container">
            <div className="bookcover-left">
                <div className="bookcover-left-dot">
                    <div className="bookcover-left-white">
                        <div className="bookcover-left-content">
                            아앙아ㅏㅇ 여기에 사용자 사진 추가
                        </div>
                    </div>
                </div>
            </div>

            <div className="bookcover-right">
                <div className="bookcover-right-dot">
                    <div className="bookcover-right-white">
                        <div className="couple-name">OOOO의 홈피</div>
                        <div className="bookcover-right-content">
                            아아아아 여기에 component 추가
                        </div>
                    </div>

                    <div className="menu">
                        <div className="menu-container">
                            <Link to="/">메인</Link>
                            <Link to="/photo">사진</Link>
                            <Link to="/friend">친구</Link>
                            <Link to="/anniversary">기념일</Link>
                            <Link to="/setting">설정</Link>
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
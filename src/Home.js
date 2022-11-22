import React from 'react';
import './Home.css';
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom";
import Main from './Components/Pages/Main/main'
import Photo from './Components/Pages/Photo/post/post'
import Friend from './Components/Pages/Friend/searchFriend'
import Anniversary from './Components/Pages/Anniversary/anniversary'
import Setting from './Components/Pages/Setting/editUserInformation'

const Home = () => {
    return (
        <>
        <div className="bookcover">

            <div className="bookcover-container">
            <div className="bookcover-left">
                <div className="bookcover-left-dot">
                    <div className="bookcover-left-white">
                        <div className="bookcover-left-content">
                            
                            <div className="userImg-container">
                                <div className="userImg">
                                    <div className="boyImg">sdf</div>
                                    <div className="connect"></div>
                                    <div className="connect"></div>
                                    <div className="connect"></div>
                                    <div className="girlImg">dddd</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bookcover-right">
                <div className="bookcover-right-dot">
                    <div className="bookcover-right-white">
                        <div className="couple-name">OOOO의 홈피</div>
                        <div className="bookcover-right-content">              
                            <Outlet />
                        </div>
                    </div>

                    <div className="menu">
                        <div className="menu-container">
                            <Link to="/home">메인</Link>
                            <Link to="/home/photo">사진</Link>
                            <Link to="/home/friend">친구</Link>
                            <Link to="/home/anniversary">기념일</Link>
                            <Link to="/home/setting">설정</Link>
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
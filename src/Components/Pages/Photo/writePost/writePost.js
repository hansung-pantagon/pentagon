import React from 'react';
import './writePost.css';
import {Link} from "react-router-dom";

const writePost = () => {
    return (
        <div className="writePost-container">
            <form action="">
                <div className="writePost-up">
                    <div className="date">날짜<input type="date"></input></div>
                    <div className="upload">업로드</div>
                    <Link to="/home/photo"><div className="cancel">취소</div></Link>
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>
                            <div className="writePost-img"><input type="file"></input></div>
                            <input className="writePost-content" type="text"></input>
                        </div>
                        
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default writePost;
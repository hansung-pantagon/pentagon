import React from 'react';
import './eachPost.css';
import {Link} from "react-router-dom";

const eachPost = () => {
    return (
        <div className="writePost-container">
                <div>
                    <div className="date">2022년 10월 1일</div>
                    <div>
                        <Link to="/home/photo"><div className="cancel">이전</div></Link>
                        
                    </div>
                    
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>
                            <img src="" type="file" className="writePost-img"></img>
                        </div>
                        <div>
                            <div className="writePost-content" type="text"> // 여기에 내용</div>
                        </div>
                        
                    </div>
                </div>
            
        </div>
    );
};

export default eachPost;
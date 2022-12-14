import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './EachPost.css';

const EachPost = () => {
    const location = useLocation();

    const selectedData = location.state.selectedData;

    return (
        <div className="writePost-container">
            <div>
                <div className="eachPost-date">
                    {selectedData.dateAt}
                </div>
                <div>
                    <Link to="/home/photo">
                        <div className="cancel">
                            이전
                        </div>
                    </Link>
                </div>
            </div>
            <div className="writePost-down">
                <div 
                    className="writePost-content-container">
                    <div>
                        <img 
                            src={selectedData.imgUrl} 
                            className="writePost-img"
                            alt="">
                        </img>
                    </div>
                    <div>
                        <div
                            className="eachPost-content" 
                            type="text"> 
                            {selectedData.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachPost;

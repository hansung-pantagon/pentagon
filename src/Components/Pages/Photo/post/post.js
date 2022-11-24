import React from 'react';
import './post.css'
import AddButton from '../images/addButton.png';
import ODung from '../images/odung2.jpeg';
import {Link} from "react-router-dom";

const post = () => {
    return (
        <div className="post-container">
            <div className="post">
                <Link to="/home/photo/writePost">
                    <div className="post-grid"><div className="addButtonDiv"><img className="addButton" src={AddButton}></img></div></div>
                </Link>
                <div className="post-grid">
                    <div className="post-content-container">
                        <img src={ODung} className="postImg-border postImg"></img>
                        <div className="postDate">2022.10.05</div>
                        <div className="postContent"><div>10월 달이다!!!ddddddddddddd</div></div>
                    </div>
                </div>
                <div className="post-grid">
                    <div className="post-content-container">
                        <img src={ODung} className="postImg-border postImg"></img>
                        <div className="postDate">2022.10.05</div>
                        <div className="postContent"><div>10월 달이다!!!dddsdfsddd</div></div>
                    </div>
                </div>
                <div className="post-grid">
                    <div className="post-content-container">
                        <img src={ODung} className="postImg-border postImg"></img>
                        <div className="postDate">2022.10.05</div>
                        <div className="postContent"><div>10월 달이다!!!sssssss</div></div>
                    </div>
                </div>
                <div className="post-grid">
                    <div className="post-content-container">
                        <img src={ODung} className="postImg-border postImg"></img>
                        <div className="postDate">2022.10.05</div>
                        <div className="postContent"><div>10월 달이다!!!ddddddddddddd</div></div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default post;
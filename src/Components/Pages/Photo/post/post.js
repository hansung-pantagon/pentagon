import React from 'react';
import './post.css'
import AddButton from '../images/addButton.png';
import ODung from '../images/odung2.jpeg';
import {Link} from "react-router-dom";

const post = () => {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post-grid">
                    <div className="post-content-container">
                        <div className="postImg-border"><img src={ODung} className="postImg"></img></div>
                        <div className="postDate">2022.10.05</div>
                        <div className="postContent">10월 달이다!!!</div>
                    </div>
                </div>
                <div className="post-grid">
                    <div className="post-content-container">
                        <div className="postImg-border"><img src={ODung} className="postImg"></img></div>
                        <div className="postDate">2022.10.05</div>
                        <div className="postContent">10월 달이다!!!</div>
                    </div>
                </div>
                <div className="post-grid">
                    <div className="post-content-container">
                        <div className="postImg-border"><img src={ODung} className="postImg"></img></div>
                        <div className="postDate">2022.10.05</div>
                        <div className="postContent">10월 달이다!!!</div>
                    </div>
                </div>
                <Link to="/home/photo/writePost">
                    <div className="post-grid"><div className="addButtonDiv"><img className="addButton" src={AddButton}></img></div></div>
                </Link>
            </div>
            
        </div>
    );
};

export default post;
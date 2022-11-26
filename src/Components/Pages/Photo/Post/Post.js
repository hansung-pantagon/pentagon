import React, { useEffect, useState } from 'react';
import AddButton from '../images/addButton.png';
import { Link } from "react-router-dom";
import PostData from "./PostData";
// import WritePost from "../writePost/WritePost";
import './Post.css'


const Post = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState("");

    const loggedIn = window.sessionStorage.getItem("loginId");
    const getData = window.localStorage.getItem("post");

    useEffect(() => {
        console.log("rendering");
        console.log(JSON.parse(getData));
        window.sessionStorage.setItem("loginId", "a");
        let post = JSON.parse(getData);
        if (!post) {
            post = [];
        }
        window.sessionStorage.getItem("loggedIn");

        console.log(post);
        setInfo(post);
    }, []);

    let postArray = [];

    const handleRemove = postId => {
        postArray = JSON.parse(getData);   
        if (!postArray) { return; }

        const updateData = postArray.filter(item => item.postId !== postId);
        window.localStorage.setItem("post", JSON.stringify(updateData));
        setInfo(updateData);
    }

    const handleEdit = item => {
        const { id, postId, content, imgUrl, dateAt } = item;
        const selectedData = {
            postId,
            id,
            imgUrl,
            content,
            dateAt,
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    console.log(selected);

    return (
        <div className="post-container">
            <div className="post">
                <Link
                    to={"/home/photo/writePost"}
                    state={{
                        onSaveData: "handleSave"
                    }}>
                    <div className="post-grid">
                        <div className="addButtonDiv">
                            <img 
                                className="addButton" 
                                src={AddButton}
                                alt="">
                            </img>
                        </div>
                    </div>
                </Link>
                <PostData 
                    info={info}
                    handleRemove={handleRemove}
                    handleEdit={handleEdit}
                />
            </div>
        </div>
    );
};

export default Post;
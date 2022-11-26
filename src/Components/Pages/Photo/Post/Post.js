import React, { useEffect, useState, useRef } from 'react';
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

    const nowPostId = 
        (!getData || getData === "[]") 
        ? 0 
        : JSON.parse(getData).at(-1).postId;

    const nextPostId = useRef(nowPostId + 1);   

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

    const storeLocal = (key, data) => {
        postArray = JSON.parse(window.localStorage.getItem(key));   
        if (!postArray) {
            postArray = [];
        }
        postArray.push(data);

        window.localStorage.setItem(key, JSON.stringify(postArray));
    }

    // write, edit 둘 다 필요
    const handleSave = (data) => {
        const { postId, content, imgUrl, dateAt } = data;
        console.log(loggedIn);
        
        if (postId) {
            const editArray = JSON.parse(getData).map(row => data.postId === row.postId ? {
                postId,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            } : row)
            setInfo (editArray)
            console.log(editArray);
            window.localStorage.setItem("post", JSON.stringify(editArray));
        } else {
            console.log(info);
            
            setInfo( info => info.concat({
                postId: nextPostId.current,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            }))
            data.postId = nextPostId.current;
            storeLocal("post", data);
            nextPostId.current += 1;
        }
    }

    // 변동 X
    const handleRemove = postId => {
        postArray = JSON.parse(getData);   
        if (!postArray) { return; }

        const updateData = postArray.filter(item => item.postId !== postId);
        window.localStorage.setItem("post", JSON.stringify(updateData));
        setInfo(updateData);
    }

    // 변동 X
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
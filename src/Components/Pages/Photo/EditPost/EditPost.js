import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./EditPost.css"

const loggedIn = "1";

const EditPost = () => {
    const getData = window.localStorage.getItem("post");

    const navigate = useNavigate();
    const location = useLocation();
    const selectedData = location.state.selectedData;

    const [info, setInfo] = useState([]);
    const [edited, setEdited] = useState(selectedData);

    const storeLocal = (key, data) => {
        postArray = JSON.parse(window.localStorage.getItem(key));   
        if (!postArray) {
            postArray = [];
        }
        postArray.push(data);

        window.localStorage.setItem(key, JSON.stringify(postArray));
    }

    let postArray = [];

    const handleSave = data => {
        const { postId, content, imgUrl, dateAt } = data;
        console.log(loggedIn);
        console.log(data);
        
        if (!!postId) {
            const editArray = JSON.parse(getData).map(row => data.postId === row.postId ? {
                postId,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            } : row)
            setInfo(editArray)
            console.log(editArray);
            window.localStorage.setItem("post", JSON.stringify(editArray));
        } else {
            console.log(info);
            
            setInfo( info => info.concat({
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            }))
            storeLocal("post", data);
        }
    }

    const onEditChange = (e) => {
        const {name, value } = e.target;
        console.log(edited);

        setEdited({
            ...edited,
            [name]: value
        })
        console.log(edited);
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleSave(edited);

        navigate(`/home/photo`);
    }

    return (
        <div className="writePost-container">
            <form onSubmit={onSubmitEdit}>
                <div>
                    <div>
                        {selectedData.dateAt}
                    </div>
                    <div>
                        <Link to="/home/photo">
                            <div className="cancel">
                                <button>
                                    취소
                                </button>
                            </div>
                        </Link>
                        <div className="upload">
                            <button type='submit'>
                                수정
                            </button>
                        </div>
                    </div>
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>
                            POST_ID: {selectedData.postId}
                        </div>
                        <div>
                            <img 
                                id="view" 
                                src={selectedData.imgUrl}
                                alt="">
                            </img>
                        </div>
                    </div>
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>
                            Content: 
                            <input 
                                className="writePost-content"
                                type='text' 
                                name='content' 
                                value={edited.content} 
                                onChange={onEditChange} 
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
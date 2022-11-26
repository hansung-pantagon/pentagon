import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./EditPost.css"

const loggedIn = "1";

const EditPost = () => {
    const location = useLocation();
    const getData = window.localStorage.getItem("post");
    const selectedData = location.state.selectedData;
    const [info, setInfo] = useState([]);
    const [edited, setEdited] = useState(selectedData);

    // let { postId } = useParams();
    // console.log(postId);

    // console.log(params);

    console.log(location);
    console.log(location.state);


    const storeLocal = (key, data) => {
        postArray = JSON.parse(window.localStorage.getItem(key));   
        if (!postArray) {
            postArray = [];
        }
        postArray.push(data);

        window.localStorage.setItem(key, JSON.stringify(postArray));
    }

    let postArray = [];

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
                // postId: nextPostId.current,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            }))
            // data.postId = nextPostId.current;
            storeLocal("post", data);
            // nextPostId.current += 1;
        }
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
        console.log(edited);
        setEdited(edited);
    };

    const onEditChange = (e) => {
        const files = e.target.files;

        setEdited({
            ...edited,
            "id": loggedIn,
            "imgUrl": () => {
                URL.createObjectURL(files[0]);
            },
            [e.target.name]: e.target.value
        })
    }

    // const handleEditSubmit = item => {
    //     console.log(item);
    //     handleSave(item);
    // }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleSave(edited);
    }

    return (
        <div className="writePost-container">
            <form onSubmit={onSubmitEdit}>
                <div>
                    <div className="date">
                        날짜
                        <input 
                            type="date"
                            name="dateAt"
                            value={edited.dateAt}
                        />
                    </div>
                    <div>
                        {/* 취소 버튼은 form 밖으로 빼야하지 않나? */}
                        <Link to="/home/photo">
                            <div className="cancel">
                                <button>
                                    취소
                                </button>
                            </div>
                        </Link>
                            {/*글 작성 처리*/}
                        <Link to="/home/photo">
                            <div className="upload">
                                <button type='submit'>
                                    수정
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>POST_ID: {edited.id}</div>
                            <div>
                                이미지 수정
                            <input 
                                type='file'
                                className="writePost-img"
                                id="imgUrl"
                                name="imgUrl"
                                accept=".jpg, .jpeg, .png" 
                                onChange={onEditChange}
                            />
                            {/* <input 
                                className="writePost-img"
                                type="file"
                                name="input-file"
                                value={edited.imgUrl}
                                onChange={onEditChange}
                            /> */}
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
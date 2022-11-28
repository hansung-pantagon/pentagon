import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './WritePost.css';


const WritePost = () => {
    const navigate = useNavigate();

    const getData = window.localStorage.getItem("post");
    const loggedIn = window.sessionStorage.getItem("loginId");

    const [imageSrc, setImageSrc] = useState('');
    const [info, setInfo] = useState([]);
    const [form, setForm] = useState({
        id: "",
        postId: "",
        imgUrl: "",
        content: "",
        dateAt: "",
    });


    const nowPostId = 
        (!getData || getData === "[]") 
        ? 0 
        : JSON.parse(getData).at(-1).postId;

    const nextPostId = useRef(nowPostId + 1);   

    let postArray = [];

    const storeLocal = (key, data) => {
        postArray = JSON.parse(window.localStorage.getItem(key));   
        if (!postArray) {
            postArray = [];
        }
        postArray.push(data);

        window.localStorage.setItem(key, JSON.stringify(postArray));
    }

    const handleSave = data => {
        const { postId, content, imgUrl, dateAt } = data;
        
        if (!!postId) {
            const editArray = JSON.parse(getData).map(row => data.postId === row.postId ? {
                postId,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            } : row)
            window.localStorage.setItem("post", JSON.stringify(editArray));
            setInfo(editArray);
        } else {
            const newData = {
                postId: nextPostId.current,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            }

            setInfo( info => info.concat({
                postId: nextPostId.current,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            }))
            data.postId = nextPostId.current;
            nextPostId.current += 1;
            storeLocal("post", data);
        }
    }

    const imgInfo = document.getElementById("imgUrl");

    const handleChange = (e) => {
        const { name, value } = e.target;
        const files = e.target.files;
        if (!!files) {
            setImageSrc(URL.createObjectURL(files[0]));
        }

        setForm({
            ...form,
            "id": loggedIn,
            "imgUrl": () => {
                URL.createObjectURL(files[0]);
            },
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        if (!!form.imgUrl) {
            form.imgUrl = URL.createObjectURL(imgInfo.files[0]);
        }
        e.preventDefault();
        handleSave(form);
        navigate(`/home/photo`);
    }

    return (
        <div className="writePost-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        className="date"
                        htmlFor="dateAt"
                    >
                        데이트 한 날짜
                        <input
                            type="date"
                            id="dateAt"
                            name="dateAt"
                            onChange={handleChange}
                        />
                    </label>
                    <div>
                        <Link to="/home/photo">
                            <div className="cancel">취소</div>
                        </Link>
                        <div className="upload">
                            <button 
                                className="saveBtn" 
                                type='submit'>
                                저장
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>
                            <input 
                                type='file'
                                id="imgUrl"
                                name="imgUrl"
                                accept=".jpg, .jpeg, .png" 
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <div className="writePost-img">
                                <label htmlFor="imgUrl">
                                    <div className="preview">
                                        {imageSrc && <img src={imageSrc} alt="preview-img" className="uploadIMG" />}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <input 
                                placeholder='게시글 내용을 입력해주세요'
                                type='text'
                                name='content'
                                className='writePost-content'
                                value={form.content}
                                onChange={handleChange} 
                            />
                        </div>
                    
                    </div>
                </div> 
            </form>
        </div>
    );
};

export default WritePost;
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import './WritePost.css';

// const loggedIn = window.sessionStorage.getItem("loggedId");
const loggedIn = "1";

const WritePost = () => {
    const navigate = useNavigate();

    const getData = window.localStorage.getItem("post");

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
            console.log(editArray);
        } else {
            console.log(info);
            
            const newData = {
                postId: nextPostId.current,
                id: loggedIn,
                imgUrl,
                content,
                dateAt
            }
            console.log(newData);

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
            console.log("여기도 출력?");
        }
    }

    const imgInfo = document.getElementById("imgUrl");

    const handleChange = (e) => {
        const { name, value } = e.target;
        const files = e.target.files;
        console.log(imgInfo);
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
            <div id="main-info">게시글 추가하기</div>
            <br />
            <form onSubmit={handleSubmit}>
                <br />
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
                        
                        {/*글 작성 처리*/}
                        <div className="upload">
                            <button 
                                id="saveBtn" 
                                type='submit'>
                                저장
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>
                        <label
                            htmlFor="imgUrl"
                        >
                            <GrGallery />
                                Add photo
                            <input 
                                type='file'
                                // className="writePost-img"
                                id="imgUrl"
                                name="imgUrl"
                                accept=".jpg, .jpeg, .png" 
                                onChange={handleChange}
                            />
                            <div className="preview">
                                {imageSrc && <img src={imageSrc} alt="preview-img" />}
                            </div>
                            {/* <img id="view" src="" alt=""></img> */}
                        </label>
                        </div>
                    </div>
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-conatiner">
                        <div>
                        <label 
                            className="label" 
                            htmlFor="content">
                                content
                            <input 
                                placeholder='게시글 내용을 입력해주세요'
                                type='text'
                                name='content'
                                value={form.content}
                                onChange={handleChange} 
                            />
                        </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WritePost;
import './Post.css';
import React, { useState } from "react";

const Post = ({ onSaveData }) => {
    const [form, setForm] = useState({
        // name: "",
        // username: "",
        // phone: "",

        id: "", // 사용자 id
        postId: "", // 게시글 번호
        // like: "",       // 해당 게시글 좋아요 수
        // private: true,    // default: true
        content: "",    // 게시글 내용
        // imgUrl
        // dateAt: ""  // 데이트 한 날짜
    });

    // let postArray = [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value   // objectName[“keyName”] = value objectName 객체에 keyname(key), value(value)를 추가
        })
    };


    // form의 onSubmit 이벤트를 handleSubmit 함수로 넘기고, 상위의 onSaveData 함수에 입력된 form 객체를 전달한다.
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);
        console.log(`Post handleSubmit: ${form}`);
        console.log(form);
        // storeLocal("post", form);
        console.log(window.localStorage.getItem("post"));
        setForm({
            id: "",
            postId: "", // 게시글 번호
            // like: "",       // 해당 게시글 좋아요 수
            // private: true,    // default: true
            content: "",    // 게시글 내용
            // imgUrl
            // dateAt: ""  // 데이트 한 날짜
            
            // name: "",
            // username: "",
            // phone: "",
        })
    }

    return (
        <>
            <div id="main-info">게시글 추가하기</div>
            <br />
            <form onSubmit={handleSubmit}>
                <div id="main-label-div">
                    <label className="label" htmlFor="postId">postId
                        <input 
                            required placeholder="postId를 입력해주세요" type="text" name="postId"
                            value={form.postId} onChange={handleChange} />
                    </label>

                    {/* <label class="label" htmlFor="username">Username
                        <input 
                            required placeholder="유저네임을 입력해주세요" type="username" name="username"
                            value={form.username} onChange={handleChange} />
                    </label> */}
                </div>

                <div class="sub-label-div">
                    <label class="label" htmlFor="content">content
                        <input 
                            required placeholder='게시글 내용을 입력해주세요' type='text' name='content'
                            value={form.content} onChange={handleChange} />
                    </label>
                </div>

                <div id="saveBtn">
                    <button id="saveBtn" type='submit'>저장</button>
                </div>
            </form>
        </>
    )
}

export default Post;
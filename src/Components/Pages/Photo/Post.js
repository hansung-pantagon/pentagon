import './Post.css';
import React, { useState } from "react";
import { GrGallery } from "react-icons/gr"

const Post = ({ onSaveData }) => {
    const [form, setForm] = useState({
        id: "", // 사용자 id
        postId: "", // 게시글 번호
        // like: 0,
        // private: true,    // default: true
        imgUrl: "",
        content: "",    // 게시글 내용
        // dateAt: ""  // 데이트 한 날짜
    });

    const imgInfo = document.getElementById("input-file");

    const handleChange = (e) => {
        const { name, value } = e.target;
        const files = e.target.files;

        setForm({
            ...form,
            "imgUrl": () => {
                URL.createObjectURL(files[0]);
            },
            [name]: value   // objectName[“keyName”] = value objectName 객체에 keyname(key), value(value)를 추가
        })
    };

    // form의 onSubmit 이벤트를 handleSubmit 함수로 넘기고, 상위의 onSaveData 함수에 입력된 form 객체를 전달한다.
    const handleSubmit = (e) => {
        if (!!form.imgUrl) {
            form.imgUrl = URL.createObjectURL(imgInfo.files[0]);
        }
        e.preventDefault();
        onSaveData(form);
        
        setForm({
            id: "",
            postId: "", // 게시글 번호
            // like: null,       // 해당 게시글 좋아요 수
            // private: true,    // default: true
            imgUrl: "",
            content: "",    // 게시글 내용
            // dateAt: ""  // 데이트 한 날짜
        })
    }

    return (
        <>
            <div id="main-info">게시글 추가하기</div>
            <br />
            <form onSubmit={handleSubmit}>
                <div id="main-label-div">
                    <label className="label" htmlFor="id">Id
                        <input 
                            required placeholder="id를 입력해주세요" type="text" name="id"
                            value={form.id} onChange={handleChange} />
                    </label>
                </div>
                <br />
                <div className="sub-label-div">
                    <label
                        className="OOTDWrite-input-file"
                        htmlFor="input-file"
                    >
                        <GrGallery />
                        Add photo
                        <input 
                            type='file'
                            id="input-file"
                            name="imgUrl"
                            // style={{ display: 'none'}}
                            accept=".jpg, .jpeg, .png" 
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label className="label" htmlFor="content">content
                        <input 
                            required
                            placeholder='게시글 내용을 입력해주세요'
                            type='text'
                            name='content'
                            value={form.content}
                            onChange={handleChange} />
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
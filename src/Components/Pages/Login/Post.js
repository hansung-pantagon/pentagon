import './Post.css';
import React, { useState } from "react";

const Post = ({ onSaveData }) => {
    const [form, setForm] = useState({
        name: "",
        username: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const storeLocal = (key, data) => {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    // form의 onSubmit 이벤트를 handleSubmit 함수로 넘기고, 상위의 onSaveData 함수에 입력된 form 객체를 전달한다.
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form);
        console.log(`Post handleSubmit: ${form}`);
        console.log(form);
        storeLocal("user", form);
        console.log(window.localStorage.getItem("user"));
        setForm({
            name: "",
            username: "",
            phone: "",
        })
    }

    return (
        <>
            <div id="main-info">회원 추가하기</div>
            <br />
            <form onSubmit={handleSubmit}>
                <div id="main-label-div">
                    <label class="label" htmlFor="name">Name
                        <input 
                            required placeholder="이름을 입력해주세요" type="text" name="name"
                            value={form.name} onChange={handleChange} />
                    </label>
                    <label class="label" htmlFor="username">Username
                        <input 
                            required placeholder="유저네임을 입력해주세요" type="username" name="username"
                            value={form.username} onChange={handleChange} />
                    </label>
                </div>
                <div class="sub-label-div">
                    <label class="label" htmlFor="phone">Phone
                        <input 
                            required placeholder='핸드폰 번호를 입력해주세요' type='text' name='phone'
                            value={form.phone} onChange={handleChange} />
                    </label>
                </div>
                <div id="saveBtn" className='text-center'>
                    <button id="saveBtn" type='submit'>저장</button>
                </div>
            </form>
        </>
    )
}

export default Post;
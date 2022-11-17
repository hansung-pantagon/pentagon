import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import './Board.css'

/**
 * 
 * 
 */
// 이미지 ex-> proj -> ex08-04-2/App.js 참고

const Board = () => {
    const [info, setInfo] = useState([]);   // info: 전체 데이터 배열
    const [selected, setSelected] = useState("");
    const [modalOn, setModalOn] = useState(false);

    // 고유 값으로 사용될 id
    // ref를 사용하여 변수 담기
    let postsLength = !!window.localStorage.getItem("post") ? JSON.parse(window.localStorage.getItem("post")).length : 0;

    const nextId = useRef(postsLength + 1);

    // 데이터 호출
    useEffect(() => {
        let post = JSON.parse(window.localStorage.getItem("post"));   // 데이터 배열이 전달되도록
        console.log(post);
        if (!post) {
            post = [];
        }
        setInfo(post);
    }, []);

    let postArray = [];

    const storeLocal = (key, data) => {
        // localStorage에 저장된 데이터를 배열로 가져옴
        postArray = JSON.parse(window.localStorage.getItem(key));   
        // localStorage에 매개변수로 받은 key가 없으면 새로운 배열을 만들어서 추가
        if (!postArray) {
            postArray = [];
        }
        // 가져온 배열에 데이터 추가
        postArray.push(data);
        console.log(data);
        // 데이터를 추가한 배열을 다시 localStorage에 저장
        window.localStorage.setItem(key, JSON.stringify(postArray));
    }

    // 데이터를 수정 또는 추가해서 info 변경 -> 리렌더링
    const handleSave = (data) => {
        console.log(data);
        console.log(data.id);
        // destructing assignment(구조분해할당) 
        const { postId, content } = data;

        // 데이터 수정하기
        if (data.id) {
            console.log("data.id 있음");
            setInfo (
                // 수정하는 경우 같은 id 찾고 수정하는 내용이 다르면 수정하고 저장..
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    // postInfo: {
                    postId,
                    // like: data.postInfo.like,
                    // private: data.postInfo.private,
                    content,
                    // imgUrl: data.postInfo.imgUrl,
                    // dateAt: data.postInfo.dateAt
                    // },
                } : row))
        } else {
            console.log(info);
            // 데이터 추가하기, info는 전체 데이터 배열
            setInfo( info => info.concat({
                    id: nextId.current,
                    // postInfo: {
                    postId,    // postId: data.postId
                    // like: data.like,
                    // private: data.private,
                    content,
                    // imgUrl: data.imgUrl,
                    // dateAt: data.dateAt
                    // }
                }))
                data.id = nextId.current;
                storeLocal("post", data);
            nextId.current += 1;
        }
    }

    const handleRemove = id => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = item => {
        const { id, postId, content } = item;
        setModalOn(true);
        const selectedData = {
            id, // id: item.id
            // postInfo: {
            postId,
            // like: item.postInfo.like,
            // private: item.postInfo.like,
            content,
            // imgUrl: item.postInfo.imgUrl,
            // dateAt: item.postInfo.dateAt,
            // }
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    const handleCancel = () => {
        setModalOn(false);
    }

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);
    }

    return (
        <div>
            <div>게시글 리스트</div>
            <table>
                <thead>
                    <tr>
                        <th>Id.</th>
                        <th>postId.</th>
                        {/* <th>like</th> */}
                        {/* <th>private</th> */}
                        <th>content</th>
                        {/* <th>imgUrl</th>
                        <th>dateAt</th> */}
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
            </table>
            <Post onSaveData={handleSave} />
            {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} handleEditSubmit={handleEditSubmit} />}
        </div>
    );
};

export default Board;

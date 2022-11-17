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
        console.log(typeof(post));
        if (!post) {
            post = [];
        }
        setInfo(post);
    }, []);

    let postArray = [];

    const storeLocal = (key, data) => {
        postArray = JSON.parse(window.localStorage.getItem(key));
        // localStorage에 매개변수로 받은 key가 없으면 새로운 배열을 만들어서 추가
        if (!postArray) {
            postArray = [];
        }
        postArray.push(data);
        console.log(data);
        window.localStorage.setItem(key, JSON.stringify(postArray));
    }

    // 데이터를 수정 또는 추가해서 info 변경 -> 리렌더링
    const handleSave = (data) => {
        console.log(data);
        const { postId, content } = data;
        // 데이터 수정하기
        if (data.id) {
            setInfo (
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
            // name: item.name,
            // username: item.username,
            // phone: item.phone,
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

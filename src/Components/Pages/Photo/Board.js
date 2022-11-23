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
const getData = window.localStorage.getItem("post");
const loggedIn = window.sessionStorage.getItem("loginId");

const Board = () => {
    const [info, setInfo] = useState([]);   // info: 전체 데이터 배열
    const [selected, setSelected] = useState("");
    const [modalOn, setModalOn] = useState(false);
    // const [likeValue, setLikeValue] = useState(JSON.parse(localData));

    // getData가 null(아무것도 들어가지 않은 상태)이거나 빈 배열(다 삭제된 상태)인 경우
    const nowPostId = (!getData || getData === "[]") ? 0 : JSON.parse(getData).at(-1).postId;

    // ref를 사용하여 변수 담기
    const nextPostId = useRef(nowPostId + 1);   

    // 데이터 호출
    useEffect(() => {
        window.sessionStorage.setItem("loginId", "a");
        let post = JSON.parse(getData);   // 데이터 배열이 전달되도록
        if (!post) {
            post = [];
        }
        window.sessionStorage.getItem("loggedIn");
        
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

        // 데이터를 추가한 배열을 다시 localStorage에 저장
        window.localStorage.setItem(key, JSON.stringify(postArray));
    }

    // 데이터를 수정 또는 추가해서 info 변경 -> 리렌더링
    const handleSave = (data) => {
        // destructing assignment(구조분해할당) 
        const { content, imgUrl } = data;
        console.log(loggedIn);

        // 데이터 수정하기
        if (data.postId) {  // postId
            const editArray = JSON.parse(getData).map(row => data.postId === row.postId ? {
                postId: data.postId,
                id: loggedIn,
                // like: data.postInfo.like,
                // private: data.postInfo.private,
                imgUrl, // imgUrl: data.postInfo.imgUrl,
                content,
                // dateAt: data.postInfo.dateAt
            } : row)
            setInfo (editArray)
            console.log(editArray);
            window.localStorage.setItem("post", JSON.stringify(editArray));
        } else {
            console.log(info);
            
            // 데이터 추가하기, info는 전체 데이터 배열
            setInfo( info => info.concat({
                postId: nextPostId.current,
                
                id: loggedIn,    // postId: data.postId
                // like: data.like,
                // private: data.private,
                imgUrl, // imgUrl: data.imgUrl,
                content,
                // dateAt: data.dateAt
            }))
            data.postId = nextPostId.current;
            storeLocal("post", data);
            nextPostId.current += 1;
        }
    }

    const handleRemove = postId => {
        postArray = JSON.parse(getData);   
        // localStorage에 매개변수로 받은 key가 없으면 새로운 배열을 만들어서 추가
        if (!postArray) { return; }

        const updateData = postArray.filter(item => item.postId !== postId);
        window.localStorage.setItem("post", JSON.stringify(updateData));
        setInfo(updateData);
    }

    const handleEdit = item => {
        const { id, postId, content, imgUrl } = item;
        setModalOn(true);
        const selectedData = {
            postId, // id: item.id
            id,
            // like: item.postInfo.like,
            // private: item.postInfo.like,
            imgUrl, // imgUrl: item.postInfo.imgUrl,
            content,
            // dateAt: item.postInfo.dateAt,
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
                        <th>Writer</th>
                        <th>postId</th>
                        {/* <th>like</th> */}
                        {/* <th>private</th> */}
                        <th>img</th>
                        <th>content</th>
                        {/* <th>dateAt</th> */}
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

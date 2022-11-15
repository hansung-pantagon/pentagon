import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import './Board.css'

const Board = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState("");
    const [modalOn, setModalOn] = useState(false);

    // 고유 값으로 사용될 id
    // ref를 사용하여 변수 담기
    const nextId = useRef(11);

    // 더미 데이터 호출
    useEffect(() => {
        const user = window.localStorage.getItem("user");
        console.log(user);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                console.log(res.data);
                setInfo(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    const handleSave = (data) => {
        // 데이터 수정하기
        if (data.id) {
            setInfo (
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    name: data.name,
                    username: data.username,
                    phone: data.phone,
                } : row))
        } else {
            /**
             * setInfo((prev) => {
             *  return [...prev, {
             *      id: nextId.current,
             *      name: data.name,
             *      email: data.email,
             *      phone: data.phone,
             *      website: data.website
             *   }]
             * });
             */
            setInfo( info => info.concat({
                    id: nextId.current,
                    name: data.name,
                    username: data.username,
                    phone: data.phone,
                    // boy: {
                    //     birthday: data.boy.birthday,
                    // }
                }))
            nextId.current += 1;
        }
    }

    const handleRemove = id => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = item => {
        setModalOn(true);
        const selectedData = {
            id: item.id,
            name: item.name,
            username: item.username,
            phone: item.phone,
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
            <div>고객 정보 리스트</div>
            <table>
                <thead>
                    <tr>
                        <th>Id.</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone No.</th>
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

import React, { useState } from "react";

const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
    const [edited, setEdited] = useState(selectedData);

    const onCancel = () => {
        handleCancel();
    }

    const onEditChange = (e) => {
        setEdited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handleEditSubmit(edited);
    }

    

    return (
        <div id="a">
            <div>
                <div>
                    <h3>게시글 정보 수정하기</h3>
                    <i onClick={onCancel}></i>
                </div>
                <form onSubmit={onSubmitEdit}>
                    <div class="p-3">
                        <div>ID: {edited.id}</div>
                        <div>Name: <input type='text' name='name' 
                        value={edited.name} onChange={onEditChange} /></div>
                        <div>Username: <input type='text' name='Username' 
                        value={edited.username} onChange={onEditChange} /></div>
                        <div>Phone: <input type='text' name='phone' 
                        value={edited.phone} onChange={onEditChange} /></div>
                    </div>
                    <div>
                        <button onClick={onCancel}>취소</button>
                        <button type='submit'>수정</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
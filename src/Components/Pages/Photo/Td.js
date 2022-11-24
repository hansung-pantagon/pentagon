import './Td.css';
import React from "react";
// npm install react-icons
import { FaTrash, FaUserEdit } from "react-icons/fa"

/**
 * 화면 위 테이블에 정보를 보여주는 컴포넌트
 */

const Td = ({ item, handleRemove, handleEdit }) => {    // item는 게시글 정보

    const { id, postId, content, dateAt } = item;
    // 데이터 삭제
    const onRemove = () => {
        handleRemove(item.postId);  // postId
    }

    // 데이터 편집
    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr>
            <td className="item">{id}</td>
            <td className="item">{postId}</td>
            <td className="item" alt=""><img src={item.imgUrl} alt="" /></td>
            <td className="item">{content}</td>
            <td className="item">{dateAt}</td>
            <td id="edit" onClick={onEdit}>
                <FaUserEdit />
            </td>
            <td id="remove" onClick={onRemove}>
                <FaTrash />
            </td>
        </tr>
        </>
    );
};

export default Td;
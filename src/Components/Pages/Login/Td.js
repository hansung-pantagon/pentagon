import './Td.css';
import React from "react";
// npm install react-icons
import { FaTrash, FaUserEdit } from "react-icons/fa"

const Td = ({ item, handleRemove, handleEdit }) => {

    // 데이터 삭제
    const onRemove = () => {
        handleRemove(item.id);
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr>
            <td class="item">{item.id}</td>
            <td class="item">{item.name}</td>
            <td class="item">{item.username}</td>
            <td class="item">{item.phone}</td>
            <td id="edit" onClick={onEdit} className="text-center text-purple-400 cursor-pointer show-modal">
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
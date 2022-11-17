import React from "react";
import Td from "./Td";

/**
 * 
 * @param {Td에 데이터 등을 전달하는 컴포넌트} param0 
 * @returns 
 */

const Tr = ({ info, handleRemove, handleEdit }) => {
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <Td key={item.id} item={item} handleRemove={handleRemove} handleEdit={handleEdit} />
                    )
                })
            }
        </tbody>
    );
};

export default Tr;
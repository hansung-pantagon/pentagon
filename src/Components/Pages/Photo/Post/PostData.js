import React from "react";
import EachPostData from "./EachPostData";

const PostData = ({ info, handleRemove, handleEdit }) => {
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <EachPostData
                            key={item.postId} 
                            item={item} 
                            handleRemove={handleRemove} 
                            handleEdit={handleEdit} 
                        />
                    )
                })
            }
        </tbody>
    );
};

export default PostData;
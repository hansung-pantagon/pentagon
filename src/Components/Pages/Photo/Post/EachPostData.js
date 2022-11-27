import React from "react";
// npm install react-icons
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa"
import { Link } from "react-router-dom";

/**
 * 화면 위 테이블에 정보를 보여주는 컴포넌트
 */

const EachPostData = ({ item, handleRemove, handleEdit }) => {

    const { postId, imgUrl, content, dateAt } = item;
    // 데이터 삭제
    const onRemove = () => {
        handleRemove(postId);  // postId
    }

    // 데이터 편집
    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
            <div className="post-grid">
                <div className="post-content-container">
                    <Link
                        to={`/home/photo/EachPost`}
                        state={{ selectedData: item}}
                    >                        
                        <div>
                            <img
                                className="postImg-border postImg"
                                src={imgUrl}
                                alt="이미지를 불러올 수 없습니다"
                            />
                            <div className="postDate">
                                {dateAt}
                            </div>
                            <div className="postContent">
                                {content}
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={`/home/photo/EditPost?${postId}`}
                        state={{ selectedData: item }}>
                        <div 
                            className="edit"
                            onClick={onEdit}
                        >
                            <FaRegEdit color='#000000'/>
                        </div>
                    </Link>
                    <div
                        className="remove"
                        onClick={onRemove}
                    >
                        <FaRegTrashAlt color='#000000'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EachPostData;
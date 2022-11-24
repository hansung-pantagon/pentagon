import React from 'react';

const eachPost = () => {
    return (
        <div className="writePost-container">
            <form action="">
                <div>
                    <div className="date">날짜 <input type="date"></input></div>
                    <div>
                        <Link to="/home/photo"><div className="cancel">취소</div></Link>
                        
                        {/*글 작성 처리*/}
                        <div className="upload">업로드</div>
                    </div>
                    
                </div>
                <div className="writePost-down">
                    <div className="writePost-content-container">
                        <div>
                            <input type="file" className="writePost-img"></input>
                        </div>
                        <div>
                            <input className="writePost-content" type="text"></input>
                        </div>
                        
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default eachPost;
import React from 'react';
import './editUserInformation.css';

const Share = () => {

    //복사 완료 뜨게
    const copyComplete = (text) => {
        if (isLoggedIn) {

        //클립보드복사
        // 흐름 1.
        let url = "";
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        url = window.document.location.href;

        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        console.log(textarea);
        document.body.removeChild(textarea);
        alert("클립보드에 복사되었습니다.");
        
        } else {
        alert("로그인을 하지 않으면 복사할 수 없습니다.");
        }
    };

    return (
        <>
            <div>공유하기</div>
                <div className="theme">
                    <div>우리 커플의 이야기를 다른 사람에게 공유하시겠어요??? </div>
                    
                </div>
                <div className="btn-copy" onClick={copyComplete}>
                우리 이야기 공유하기
                </div>
        </>
    );
}

export default Share;
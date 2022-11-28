// 세션에 loginId가 있는지 없는지 확인, 있으면 해당 id 리턴, 없으면 false
// isLogin

// isLogin이 true이면 local에서 찾아서 리턴
// isOwner -> 유저 정보 가져오기


export const isLogin = () => {
    const nowId = window.sessionStorage.getItem("loginId");
    if (!nowId) {
        return false;
    }
    return nowId;
}

//loginId 인자로 받아서 로컬에서 찾아서 return 해주기
export const isOwner = () => {
    if (!isLogin) {
        return;
    }
    return JSON.parse(window.localStorage.getItem(isLogin));
} 
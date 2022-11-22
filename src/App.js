import './App.css';
import Login from './Components/Pages/Login/login';
import Home from './Home'
import Main from './Components/Pages/Main/main'
import Photo from './Components/Pages/Photo/post/post'
import Friend from './Components/Pages/Friend/searchFriend'
import Anniversary from './Components/Pages/Anniversary/anniversary'
import Setting from './Components/Pages/Setting/editUserInformation'
import SignUp from './Components/Pages/Login/signUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom";


function App() {
  if(window.location.pathname === "/") return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )

  return (
    <>
      <BrowserRouter>
      <div className="App">
        <div className="bookcover">

        <div className="bookcover-container">
        <div className="bookcover-left">
            <div className="bookcover-left-dot">
                <div className="bookcover-left-white">
                    <div className="bookcover-left-content">

                        <div className="userImg-container">
                          <div className="boyImg">sdf</div>
                          <div className="connect"></div>
                          <div className="connect"></div>
                          <div className="connect"></div>
                          <div className="girlImg">dddd</div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="bookcover-right">
            <div className="bookcover-right-dot">
                <div className="bookcover-right-white">
                    <div className="couple-name">OOOO의 홈피</div>
                    <div className="bookcover-right-content">
                        아아아아 여기에 component 추가
                        
                          <Routes>
                            {/* 로그인 라우팅 */}                           
                            
                            {/* 로그인해야만 접근 가능한 URL */}
                            {/* <Route path="/home/:userID/main" element={<Main />} />
                            <Route path="/home/:userID/photo" element={<Photo />} />
                            <Route path="/home/:userID/friend" element={<Friend />} />
                            <Route path="/home/:userID/anniversary" element={<Anniversary />} />
                            <Route path="/home/:userID/setting" element={<Setting />} /> */}
                          
                            <Route path="/home/main" element={<Main />} />
                            <Route path="/home/photo" element={<Photo />} />
                            <Route path="/home/friend" element={<Friend />} />
                            <Route path="/home/anniversary" element={<Anniversary />} />
                            <Route path="/home/setting" element={<Setting />} />
                            
                          </Routes>
                        
                    </div>
                </div>

                <div className="menu">
                    <div className="menu-container">
                        <Link to="/home/main">메인</Link>
                        <Link to="/home/photo">사진</Link>
                        <Link to="/home/friend">친구</Link>
                        <Link to="/home/anniversary">기념일</Link>
                        <Link to="/home/setting">설정</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>

    
    </BrowserRouter>

    </>
  );
}

export default App;

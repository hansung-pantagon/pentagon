import './App.css';
import Login from './Components/Pages/Login/login';
import Home from './Home'
import Main from './Components/Pages/Main/main'
import Photo from './Components/Pages/Photo/post/post'
import Friend from './Components/Pages/Friend/searchFriend'
import Anniversary from './Components/Pages/Anniversary/anniversary'
import Setting from './Components/Pages/Setting/editUserInformation'
import WritePost from './Components/Pages/Photo/writePost/writePost'
import EachPost from './Components/Pages/Photo/eachPost/eachPost'
import EditPost from './Components/Pages/Photo/editPost/editPost'
import SignUp from './Components/Pages/Login/signUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpInPage from "./Components/Pages/Login/SignUpInPage";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


function App() {
  const [bgColor, setBgColor] =useState("#298FA6");
  const [themeColor, setThemeColor] =useState("#47ACC2");

  const giveColorValue = (bgColor,themeColor)=>{ //와 전달받음
    setBgColor(bgColor);
    setThemeColor(themeColor);
  }

  // useEffect(()=>{
  //   console.log("app.js에서 ",bgColor);
  //   console.log("app.js에서 ",themeColor);
  // },[bgColor,themeColor])

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:userID" element={<Home />} /> */}
        
        {/*중첩 라우터 */}
        <Route path="/home" element={<Home bgValue={bgColor} themeValue={themeColor}/>} >
          <Route path="" element={<Main />} />
          <Route path="photo" element={<Photo />}/>
          <Route path="photo/writePost" element={<WritePost/>}/>
          <Route path="photo/eachPost" element={<EachPost/>}/>
          <Route path="photo/editPost" element={<EditPost/>}/>
          <Route path="photo/:postId" element={<EachPost/>}/>
          <Route path="friend" element={<Friend />} />
          <Route path="anniversary" element={<Anniversary />} />
          <Route path="setting" element={<Setting giveColorValue={giveColorValue}/>} />
        </Route>
        <Route path="/signUpInPage/*" element={<SignUpInPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
import './App.css';
import Login from './Components/Pages/Login/login';
import Home from './Home'
import Main from './Components/Pages/Main/main'
import Photo from './Components/Pages/Photo/Post/Post'
import Friend from './Components/Pages/Friend/searchFriend'
import Anniversary from './Components/Pages/Anniversary/anniversary'
import Setting from './Components/Pages/Setting/editUserInformation'
import WritePost from './Components/Pages/Photo/WritePost/WritePost'
import EachPost from './Components/Pages/Photo/EachPost/EachPost'
import EditPost from './Components/Pages/Photo/EditPost/EditPost'
import SignUp from './Components/Pages/Login/signUp';
import NotFound from './NotFound';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpInPage from "./Components/Pages/Login/SignUpInPage";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


function App() {
  const [leftColor, setleftColor] =useState("#47ACC2");
    const [rightColor, setrightColor] =useState("#47ACC2");
    const [postitColor, setPostitColor] =useState("#298FA6");

  const giveColorValue = (leftColor, rightColor, postitColor)=>{ //와 전달받음
    setleftColor(leftColor) ;
    setrightColor(rightColor);
    setPostitColor(postitColor);
  }

  // useEffect(()=>{
  //   console.log("app.js에서 ",leftColor) ;
  //   console.log("app.js에서 ",rightColor);
  // },[leftColor, rightColor])

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:userID" element={<Home />} /> */}
        
        {/*중첩 라우터 */}
        <Route path="/home" element={<Home leftValue={leftColor} rightValue={rightColor} postitValue={postitColor}/>} >
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
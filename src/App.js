import "./App.css";
import Home from "./Home";
import Main from "./Components/Pages/Main/main";
import Photo from "./Components/Pages/Photo/Post/Post";
import Anniversary from "./Components/Pages/Anniversary/anniversary";
import Setting from "./Components/Pages/Setting/editUserInformation";
import WritePost from "./Components/Pages/Photo/WritePost/WritePost";
import EachPost from "./Components/Pages/Photo/EachPost/EachPost";
import EditPost from "./Components/Pages/Photo/EditPost/EditPost";
import NotFound from "./NotFound";
import { HashRouter, Route, Routes } from "react-router-dom";
import SignUpInPage from "./Components/Pages/Login/SignUpInPage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StartScreenPage from "./Components/Pages/Login/StartScreenPage";

function App() {
  const [leftColor, setleftColor] = useState("#47ACC2");
  const [rightColor, setrightColor] = useState("#47ACC2");
  const [postitColor, setPostitColor] = useState("#298FA6");

  const giveColorValue = (leftColor, rightColor, postitColor) => {
    //와 전달받음
    setleftColor(leftColor);
    setrightColor(rightColor);
    setPostitColor(postitColor);
  };

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<StartScreenPage />} />

          {/*중첩 라우터 */}
          <Route path="/home" element={<Home leftValue={leftColor} rightValue={rightColor} postitValue={postitColor} />}>
            <Route path="" element={<Main />} />
            <Route path="photo" element={<Photo />} />
            <Route path="photo/writePost" element={<WritePost />} />
            <Route path="photo/eachPost" element={<EachPost />} />
            <Route path="photo/editPost" element={<EditPost />} />
            <Route path="photo/:postId" element={<EachPost />} />
            <Route path="anniversary" element={<Anniversary />} />
            <Route path="setting" element={<Setting giveColorValue={giveColorValue} />} />
          </Route>
          <Route path="/signUpInPage/*" element={<SignUpInPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

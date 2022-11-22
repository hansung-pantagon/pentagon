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
import SignUpInPage from "./Components/Pages/Login/SignUpInPage";
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:userID" element={<Home />} /> */}
        
        {/*중첩 라우터 */}
        <Route path="/home" element={<Home />} >
          <Route path="" element={<Main />} />
          <Route path="photo" element={<Photo />} />
          <Route path="friend" element={<Friend />} />
          <Route path="anniversary" element={<Anniversary />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/signUpInPage/*" element={<SignUpInPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

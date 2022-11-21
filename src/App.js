import Main from "./Components/Pages/Main/main";
import "./App.css";
import Home from "./Home";
import SignUpInPage from "./Components/Pages/Login/signUpInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUpInPage/*" element={<SignUpInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

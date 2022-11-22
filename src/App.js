import Main from './Components/Pages/Main/main';
import './App.css';
import Login from './Components/Pages/Login/login/login';
import Home from './Home'
function App() {
  if(window.location.pathname === "/") return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;

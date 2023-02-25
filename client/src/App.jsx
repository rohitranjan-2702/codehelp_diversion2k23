import './App.css';
import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { LoginContext } from "./contexts/LoginContext";
import Home from './page/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Doubt from './page/Doubt';
import SignUp from './page/SignUp';
import DoubtRender from './page/DoubtRender';
import Profile from './page/Profiletut';
import Profilestudent from './page/Profilestudent';
import Pricing from './component/Pricing';
import Signuptut from './page/Signuptut';
import Login from './page/Login';
import Feedbackpage from './component/Feedbackpage';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
     <LoginContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, userName, setUserName }}
        >
    <Header/>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/doubt" element={<Doubt/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/signuptut" element={<Signuptut />}/>
  <Route path="/doubtSection" element={<DoubtRender/>}/>
  <Route path="/feedback" element={<Feedbackpage/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/profilestudent" element={<Profilestudent/>}/>
  </Routes>
  
  <Footer/>
  </LoginContext.Provider>
  </BrowserRouter>
  
  );
}

export default App;

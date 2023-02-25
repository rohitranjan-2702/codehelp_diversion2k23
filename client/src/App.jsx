import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Doubt from "./page/Doubt";
import SignUp from "./page/SignUp";
import Login from "./page/Login";
import DoubtRender from "./page/DoubtRender";
import Profile from "./page/Profiletut";
import Profilestudent from "./page/Profilestudent";
import Pricing from "./component/Pricing";
import { LoginContext } from "./contexts/LoginContext";
import ProtectedRoutes from "./component/ProtectedRoute";
import ProtectedStudRoutes from "./component/ProtectedStudRoute";
import ProtectedTeachRoutes from "./component/ProtectedTeachRoute";
import Signuptut from "./page/Signuptut";
import Logintut from "./page/Logintut"
import Feedbackpage from "./component/Feedbackpage"
import TutorLogin from "./page/TutorLogin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("user"))?.isAuthed || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))?.name || ""
  );
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("user"))?.name || ""
  );
  const [userEmail, setUserEmail] = useState(
    JSON.parse(localStorage.getItem("user"))?.name || ""
  );
  const [userType, setUserType] = useState(
    JSON.parse(localStorage.getItem("user"))?.type || ""
  );
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
  };
  return (
    <BrowserRouter>
      <LoginContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          user,
          setUser,
          userName,
          setUserName,
          userEmail,
          setUserEmail,
          userType,
          setUserType,
          logout,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logintut" element={<Logintut />} />
          <Route path="/tutor/login" element={<TutorLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signuptut" element={<Signuptut />} />
          <Route element={<ProtectedRoutes />}>
            <Route element={<ProtectedStudRoutes />}>
              <Route path="/profilestudent" element={<Profilestudent />} />
              <Route path="/doubt" element={<Doubt />} />
              <Route path="/feedback" element={<Feedbackpage />} />
            </Route>
            <Route element={<ProtectedTeachRoutes />}>
              <Route path="/profileteacher" element={<Profile />} />
              <Route path="/doubtSection" element={<DoubtRender />} />
            </Route>
            <Route path="/pricing" element={<Pricing />} />
          </Route>
        </Routes>
        <Footer />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;

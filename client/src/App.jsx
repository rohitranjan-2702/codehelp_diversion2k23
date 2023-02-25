import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Doubt from './page/Doubt';
import SignUp from './page/SignUp';
import DoubtRender from './page/DoubtRender';
import Profile from './page/Profiletut';
import Profilestudent from './page/Profilestudent';
import Pricing from './component/Pricing';




function App() {
  return (
  
    <BrowserRouter>
    <Header/>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/doubt" element={<Doubt/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/signuptut" element={<Signuptut />}/>
  <Route path="/doubtSection" element={<DoubtRender/>}/>
  <Route path="/feedback" element={<Feedbackpage/>}/>
  <Route path="/pricing" element={<Pricing/>}/>
  <Route path="/profilestudent" element={<Profilestudent/>}/>
  </Routes>
  
  <Footer/>
  
  </BrowserRouter>
  
  );
}

export default App;

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Doubt from './page/Doubt';
import Profile from './page/Profile';
import SignUp from './page/SignUp';



function App() {
  return (
  
    <BrowserRouter>
    <Header/>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/doubt" element={<Doubt/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route path="/profile" element={<Profile/>}/>
  </Routes>
  
 
  <Footer/>

  </BrowserRouter>
  
  );
}

export default App;

import './App.css';
import { BrowserRouter,Router,Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <>
    <Header/>
  <Home/>
  <Footer/>
  
  </>
  );
}

export default App;

import './App.css';
import { BrowserRouter,Router,Route } from 'react-router-dom';
import Home from './page/Home';
function App() {
  return (
   <BrowserRouter>
   <Home/>
    <Router>
      <Route path="/" elememt={<Home/>}/>

      
    </Router>
   </BrowserRouter>
  );
}

export default App;

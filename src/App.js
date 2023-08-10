import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Food from './components/Food';
import Transport from './components/Transport';
import Travel from './components/Travel';
import Places from './components/Places';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Food' element={<Food/>}></Route>
    <Route path='/Transport' element={<Transport/>}></Route>
    <Route path='/Travel' element={<Travel/>}></Route>
    <Route path='/Places' element={<Places/>}></Route>
  </Routes> 
  </BrowserRouter>
  </>
  );
}

export default App;

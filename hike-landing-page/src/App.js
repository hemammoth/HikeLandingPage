import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Covered from './pages/Covered';
import Blog from "./pages/Blog";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/covered' element={<Covered/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

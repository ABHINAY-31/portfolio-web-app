import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Component/Nav/NavBar';
import Home from './Component/Home/Home';
import About from './Component/About/About'
import Project from './Component/Project/Project'
import Other from './Component/Other/Other'
function App() {
  return (
    <div style={{height:"100%"}}>
        <BrowserRouter>
          <div className="my-nav" style={{display:"flex", justifyContent:"center", padding:"5px"}}>
            <NavBar />
          </div>
          <div style={{}}>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/About' element={<About/>}></Route>
              <Route path='/Project' element={<Project/>}></Route>
              <Route path='/Other' element={<Other/>}></Route>
            </Routes>
          </div>

        </BrowserRouter>
      </div>
  );
}

export default App;

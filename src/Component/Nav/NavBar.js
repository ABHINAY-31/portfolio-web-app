import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './NavBar.css'
export default function NavBar() {
  const[myclass, setClass] = useState("new-nav-option");
  const[display, setDisplay] = useState("none");
  const myFunc = () => {
    console.log("done");
    let l = myclass === "new-nav-option" ? "nav-options" : "new-nav-option";
    let b = display === "none" ? "block" : "none";
    setClass(() => l);
    setDisplay(() => b);
  }
  return (
    <div className="nav-bar-body">
        <div className="text">
            <p> <b>Abhinay</b>  Singh</p>
        </div>
        <div className= {myclass} >
            <NavLink to="/" activeClassName="active" style={{display:{display}}}>Home</NavLink>
            <NavLink to="/About" activeClassName="active" style={{display:{display}}}>About</NavLink>
            <NavLink to="/Project" activeClassName="active" style={{display:{display}}}>Project</NavLink>
            <NavLink to="/Other" activeClassName="active" style={{display:{display}}}>Other</NavLink>
        </div>
        <div className="click" onClick={myFunc}>click</div>
    </div>
  )
}

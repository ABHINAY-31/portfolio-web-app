import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
  return (
    <div className="nav-bar-body">
        <div className="text">
            <p> <b>Abhinay</b>  Singh</p>
        </div>
        <div className="nav-options">
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/About" activeClassName="active">About</NavLink>
            <NavLink to="/Project" activeClassName="active">Project</NavLink>
            <NavLink to="/Other" activeClassName="active">Other</NavLink>
        </div>
    </div>
  )
}

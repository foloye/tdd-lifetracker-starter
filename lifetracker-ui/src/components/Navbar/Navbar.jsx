import * as React from "react"
import "./Navbar.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Navbar(props) {
    console.log(props.loggedIn)
    let signup = "open"
    let signout = "closed"
    if (props.loggedIn){
      signup = "closed"
      signout = "open"
    }
    function setSignOut() {
      props.setLoggedIn(false)
      props.setAppState({})
    }

  return (
    <nav className="navbar">
      <ul>
        {/* className="dropdown-item" */}
        <li>
          <Link  to="/">
            <img alt="logo" src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" width="50" height="50"/>
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/activity">Activity</Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/exercise">Exercise</Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/nutrition">Nutrition</Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/sleep">Sleep</Link>
        </li>
        <li className={signup}>
          <Link className="dropdown-item" to="/login">Login</Link>
        </li>
        <li  className={signup}>
          <Link className="dropdown-item" to="/register">Sign Up</Link>
        </li>
        <li  className={signout}>
          <Link className="dropdown-item" onClick={setSignOut} to="/">Sign Out</Link>
        </li>
        
      </ul>
      
    </nav>
  )
}


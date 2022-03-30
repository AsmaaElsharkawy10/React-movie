import React from 'react'
import {Link , NavLink} from "react-router-dom"
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2 text-white">
        <NavLink exact to="/products" style={{"textDecoration":"none","color":"white"}} activeClassName="text-success" >
            Home
        </NavLink>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>  )
}

export default Navbar
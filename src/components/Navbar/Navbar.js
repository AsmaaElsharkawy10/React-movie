import React from 'react'
import {Link , NavLink} from "react-router-dom"
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"><img src='/images/pngtree-red-and-black-logo-png-image_5517319.jpg' style={{"borderRadius":"50%","width":"50px","height":"50px"}}/></Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
        <NavLink exact to="/movies" style={{"textDecoration":"none","color":"white"}} activeClassName="text-warning" >
            Home
        </NavLink>
        </li>
        <li className="nav-item mx-2">
        <NavLink exact to="/favourities" style={{"textDecoration":"none","color":"white"}} activeClassName="text-warning" >
            Favourite
        </NavLink>
        </li>
      </ul>
     <div>
     <NavLink exact to="/register" style={{"textDecoration":"none","color":"white" ,"marginRight":"20px"}} activeClassName="text-warning" >
            Register
        </NavLink>
        <NavLink exact to="/login" style={{"textDecoration":"none","color":"white"}} activeClassName="text-warning" >
            Login
        </NavLink>
     </div>
    </div>
  </div>
</nav>  )
}

export default Navbar